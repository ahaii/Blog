gunicorn -c /Users/ahaii/Python/blog/gunicorn_dev_conf.py -b 127.0.0.1:8080 blog.wsgi:application>>/tmp/gunicron.log 2>&1 &
