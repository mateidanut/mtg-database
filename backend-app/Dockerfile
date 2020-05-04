FROM python:3
WORKDIR /usr/src/app
EXPOSE 5000
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . .
ENV FLASK_APP=backend.py
CMD flask run --host=0.0.0.0
