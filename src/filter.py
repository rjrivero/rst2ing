# -*- coding: utf-8 -*-

import os
from rst2pdf.log import log


class Preprocess(list):
  
  """Preprocesa un fichero RestructuredText
  
  Ejecuta un par de acciones de preproceso necesarias para el
  formato de Ingeniería:
  
  - Añade a las listas de primer nivel la clase 'toplist'.
    (es decir, agrega '.. class:: toplist' antes de cada lista
    que no esté anidada)

  - Inserta un salto de página antes de cada cabecera de
    tipo H1
  """

  def __init__(self, source):
    """Procesa el fichero linea a linea"""
    list.__init__(self)
    self.name = source.name
    self.changed = False
    
    for line in source.readlines():
      line = line.rstrip()
      # Si parece que empieza una lista... 
      if line.startswith('- '):
        self.checkList(line)
      # Si parece que empieza una cabecera de primer nivel...
      elif line.startswith('='):
        self.checkHead(line)
      # El resto de lineas simplemente las añadimos al buffer.
      self.append(line)
    
    if self.changed:
      try:
        self.name = source.name + '.tmp'
        with open(self.name, 'wb') as out:
          out.write(self.read())
      except IOError:
        log.error('Could not save tmp file %s' % self.name)

  def read(self):
    """Devuelve el contenido del array unido"""
    return "\n".join(self)

  def checkList(self, line):
    """Comprueba si estamos en el primer elemento de una lista"""
    changed, mylen = False, len(self)
    # Si no hay lineas antes, es una lista top-level
    if not mylen:
      changed = True
    elif not self[-1].strip():
      # Para saber que es una lista top-level, tenemos que
      # asegurarnos de que:
      # - la linea anterior (N-1) esta vacía.
      # - la línea N-2 no es una lista anidada.
      if mylen < 2 or not self[-2].strip().startswith('-'):
        changed = True
    if changed:
      self.extend(('.. class:: toplist', ''))
      self.changed = True

  def checkHead(self, line):
    """Comprueba si la linea actual es un cierre de cabecera H1"""
    mylen = len(self)
    if mylen > 0 and all(x == '=' for x in line.strip()):
      if mylen < 2 or not self[-2].startswith('='):
        mylast, self[-1] = self[-1], '.. raw:: pdf'
        self.extend(('', '  PageBreak', '', mylast))
        self.changed = True


def install(createpdf, options):
    options.infile = Preprocess(options.infile)
