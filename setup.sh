#!/bin/sh
PROJECT_NAME=dt_webapp_frontend
pip_reqs=test-requirements.txt

source $DT_PROFILE_LOC/scripts/dt/dt_venv.sh
setup_venv 3.4

if ! [ "$VIRTUAL_ENV" = "$WORKON_HOME/$PROJECT_NAME" ]; then
    mkvirtualenv $PROJECT_NAME
fi

workon $PROJECT_NAME

pip install -r $pip_reqs

if [ -z $NODE_PATH ]; then
    ln -s /opt/local/bin/python2.7 $VIRTUAL_ENV/bin/python2
    nodeenv -p
fi

deactivate
