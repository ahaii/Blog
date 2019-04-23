from gevent import monkey
monkey.patch_all()
import multiprocessing
debug = True
loglevel = 'debug'
bind = '127.0.0.1:8080'
pidfile = '/tmp/gunicorn.pid'
logfile = '/tmp/gunicorn.log'
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'gevent'
