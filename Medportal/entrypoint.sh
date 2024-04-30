#!/bin/bash
# all dependencies are installed upon container creation, not image creation to keep image size small
python3 -m venv /venv
pip install --upgrade pip && pip install -r /app/requirements.txt
cd /app/frontend
npm install
npm run build
cd ..
python3 manage.py runserver 0.0.0.0:8000
