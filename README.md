# Learn Python Backend Development

## Create the frontend

This is based [on this repository](https://github.com/tomitokko/ai-blog-article-generator).

I used the npm, vite, vue 3 and the necessary packages to build the app.

- Run:

```bash
npm init vite
```

- Select the following:

```text
$ npm init vite
√ Project name: ... frontend
√ Select a framework: » Vue
√ Select a variant: » TypeScript
```

### Install and configure Tailwind

Follow the [official guide for Vue applications](https://tailwindcss.com/docs/guides/vite#vue).

### Use this template

I have the following code base with a small router setup: download it [here](https://github.com/JeremieLitzler/freecodecamp-learn-python-backend/tree/boilerplate-frontend-starter).

## Create the backend

### Install python with _Scoop_:

```bash
# See https://scoop.sh/#/
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
# See https://scoop.sh/#/apps?q=python
scoop bucket add main
scoop install main/python
```

## Install DJango:

```bash
py -m pip install Django==5.0.4
```

If you get

```log
WARNING: The script sqlformat.exe is installed in 'C:\Users\jlitzler\scoop\apps\python\3.12.1\Scripts' which is not on PATH.
WARNING: The script django-admin.exe is installed in 'C:\Users\jlitzler\scoop\apps\python\3.12.1\Scripts' which is not on PATH.
```

You need to add these directory to `PATH` in your environment variables on Windows.

### Create the backend project

```bash
django-admin startproject backend
```

If you aren't an admin of your PC, run the following:

```bash
/c/Users/jlitzler/scoop/apps/python/3.12.1/Scripts/django-admin.exe startproject backend
```
