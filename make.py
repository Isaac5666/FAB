import os 

while True:
    cmd = input('Which Folder: ').lower()
    if 'css' in cmd:
        name = input('?: ')
        open(f'css\\{name}.css', 'w')
    if 'js' in cmd:
        name = input('?: ')
        open(f'js\\{name}.js', 'w')
        