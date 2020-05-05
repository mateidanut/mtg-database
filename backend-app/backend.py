from flask import Flask, request, jsonify, send_file
from copy import deepcopy
from prometheus_flask_exporter import PrometheusMetrics
import mysql.connector
import uuid
import heapq

app = Flask(__name__)
metrics = PrometheusMetrics(app)
metrics.info('mtg_database', 'Magic the Gathering Card Database')

config = {
    'user': 'client',
    'password': 'client',
    'host': 'localhost',
    'database': 'mtg',
    'raise_on_warnings': True,
}

admin_config = {
    'user': 'root',
    'password': 'root',
    'host': 'db',
    'port': '3306',
    'database': 'mtg',
    'raise_on_warnings': True,
}

@app.route('/statistics/collection', methods=['GET'])
def get_collection():
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    expansions = []
    exp_statistics = []
    try:
        # get all existing expansions from the db
        cursor.callproc('get_expansions', args=())
        for result in cursor.stored_results():
            expansions = result.fetchall()

        for exp_code, _, _, _ in expansions:
            exp_statistics.append(tuple(cursor.callproc('get_expansion_progress', args=[exp_code] + [0] * 10))[1:])
    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    if not expansions:
        return "Database error", 500

    return jsonify(expansions, exp_statistics)

@app.route('/statistics/decks', methods=['GET'])
def get_decks():
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    owned_decks = []
    not_owned_decks = []
    all_decks = []
    deck_statistics = []
    try:
        cursor.callproc('get_owned_decks', args=())
        for result in cursor.stored_results():
            owned_decks = result.fetchall()
        print('owned', owned_decks)

        cursor.callproc('get_not_owned_decks', args=())
        for result in cursor.stored_results():
            not_owned_decks = result.fetchall()
        print('not owned', not_owned_decks)

        all_decks = owned_decks + not_owned_decks

        for deck_id, _ in all_decks:
            cursor.execute('select get_deck_cost(%s)', (deck_id,))
            deck_statistics.append((
                cursor.fetchall(),
                tuple(cursor.callproc('get_deck_progress', args=[deck_id] + [0] * 10))[1:],
            ))
    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    if not all_decks:
        return "Database error", 500

    return jsonify(all_decks, deck_statistics)


@app.route('/random', methods=['GET'])
def get_random():
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    random_cards = []
    try:
        # get some random cards from the db
        cursor.callproc('get_rand_cards', args=())
        for result in cursor.stored_results():
            random_cards = result.fetchall()

    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    if not random_cards:
        return "Database error", 500

    return jsonify(random_cards)


@app.route('/pics/<string:filename>', methods=['GET'])
@metrics.do_not_track()
def get_pic(filename):
    try:
        return send_file('./pics/' + filename)
    except Exception as e:
        return str(e), 500


@app.route('/card/<string:card_exp>/<int:card_no>', methods=['GET'])
@metrics.do_not_track()
def get_card(card_exp, card_no):
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    card_info = []
    try:
        # get some random cards from the db
        cursor.callproc('get_card_info', args=(card_no, card_exp))
        for result in cursor.stored_results():
            card_info = result.fetchall()

    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    if not card_info:
        return "Database error", 500

    return jsonify(card_info)


@app.route('/buy/<string:card_exp>/<int:card_no>', methods=['GET'])
@metrics.do_not_track()
def buy_card(card_exp, card_no):
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    print(card_exp)
    print(card_no)

    card_info = []
    try:
        # get some random cards from the db
        cursor.callproc('buy_card', args=(card_no, card_exp))
        for result in cursor.stored_results():
            card_info = result.fetchall()
    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    return "", 200


@app.route('/buydeck/<int:deck_id>', methods=['GET'])
def buy_deck(deck_id):
    global admin_config
    cnx = mysql.connector.connect(**admin_config)
    cursor = cnx.cursor()

    card_info = []
    try:
        # get some random cards from the db
        print('buy deck', deck_id)
        cursor.callproc('buy_deck', args=(deck_id,))
        print('buy deck', deck_id)
        for result in cursor.stored_results():
            card_info = result.fetchall()
    except Exception as e:
        print('EXCEPTION', e)
        cnx.rollback()
    else:
        cnx.commit()
    finally:
        cursor.close()
        cnx.close()

    return "", 200


if __name__ == '__main__':
    app.run('localhost', debug=False)
