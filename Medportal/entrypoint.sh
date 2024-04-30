#!/bin/bash
cd /app/frontend
npm install
npm run build
cd ..
python3 manage.py runserver 0.0.0.0:8000
