FROM node:latest

RUN apt-get update && apt-get install -y python3 python3-pip python3.11-venv

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ./api ./api
COPY ./backend ./backend
COPY ./frontend ./frontend
COPY ./manage.py ./manage.py
COPY ./requirements.txt ./requirements.txt

ENV PATH="/venv/bin:$PATH"

WORKDIR /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 8000
