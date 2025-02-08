# cat Dockerfile
FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=cami
ENV MYSQL_ROOT_PASSWORD=1234

ADD db.sql /etc/mysql/data.sql
ADD my.cnf /etc/mysql/my.cnf

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' /etc/mysql/data.sql
RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d

EXPOSE 3306