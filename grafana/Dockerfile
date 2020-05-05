FROM  grafana/grafana:5.1.0

COPY ./config.ini /etc/grafana/grafana.ini
COPY ./datasource.yaml /etc/grafana/provisioning/datasources/default.ya
COPY ./dashboard.yaml /etc/grafana/provisioning/dashboards/default.yaml
ADD ./dashboards /var/lib/grafana/dashboards
