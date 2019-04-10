gunicorn -c /data/app/blog/gunicorn_conf.py -b 127.0.0.1:8080 blog.wsgi:application >>/data/logs/gunicorn/gunicorn.log 2>&1 &
