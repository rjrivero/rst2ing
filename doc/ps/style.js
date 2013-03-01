## =======================================
## Estilos para la plantilla de Consulting
## =======================================

## Formatos de página predefinidos
## -------------------------------

pageSetup:

  firstTemplate: coverPage
  size: "A4"
  margin-left: "2cm"
  margin-right: "2cm"
  margin-bottom: "5mm"
  margin-top: "2cm"
  spacing-footer: "1cm"

pageTemplates:

  coverPage: 
    frames: [
      ["-10mm", "0cm", "5cm", "27cm"],
      ["8cm", "24cm", "10cm", "3cm"],
      ["6cm", "13cm", "11cm", "9cm"],
      ["6cm", "5cm", "11cm", "7cm"],
      ["6cm", "0cm", "11cm", "3cm"]
    ]
    showHeader: false
    showFooter: false

  oneColumn:
    frames: [
      ["0cm", "0cm", "100%", "100%"]
    ]

  twoColumn:
    frames: [
      ["0cm", "0cm", "49%", "100%"],
      ["51%", "0cm", "49%", "100%"]
    ]

## Estilos de texto y contenido
## ----------------------------

fontsAlias:
    stdFont: Calibri
    stdBold: Calibri-Bold
    stdItalic: Calibri-Oblique
    stdBoldItalic: Calibri-BoldOblique
    stdSans: Calibri
    stdSansBold: Calibri-Bold
    stdSansItalic: Calibri-Oblique
    stdSansBoldItalic: Calibri-BoldOblique
    stdMono: Courier
    stdMonoItalic: Courier-Oblique
    stdMonoBold: Courier-Bold
    stdMonoBoldItalic: Courier-BoldOblique
    stdSerif: Calibri

styles:

  # Cambiamos el tamaño y tipo de fuente base
  # a Calibri, 9.
  # -----------------------------------------

  base:
    fontName: std
    fontSize: 9

  # Tablas de encabezado y pie de pagina
  # ------------------------------------

  header:
    parent: normal
    fontName: stdBold
    alignment: left
    textColor: white

  header-table:
    commands: []
        [VALIGN, [ 0, 0 ], [ -1, -1 ], BOTTOM ]
        [BOTTOMPADDING, [ 1, 0 ], [ 1, 0 ], 18 ]
    colWidths: [ "15mm", "16cm" ]

  footer:
    parent: normal
    fontName: std
    fontSize: 7
    alignment: center
    textColor: grey
    spaceBefore: 0
    spaceAfter: 0

  footer-table:
    commands: []
        [GRID, [ 1, 0 ], [ -1, -1 ], 1, "lightgrey" ]
        [TOPPADDING, [ 0, 0 ], [ -1, -1 ], 2 ]
        [BOTTOMPADDING, [ 0, 0 ], [ -1, -1 ], 2 ]
        [LEFTPADDING, [ 0, 0 ], [ -1, -1 ], 2 ]
        [RIGHTPADDING, [ 0, 0 ], [ -1, -1 ], 2 ]
        [VALIGN, [ 0, 0 ], [  1,  0 ], BOTTOM ] 
        [VALIGN, [ 1, 0 ], [ -1, -1 ], CENTER ] 
        [ALIGN,  [ 0, 0 ], [  1,  0 ], RIGHT ] 
        [ALIGN,  [ 1, 0 ], [ -1, -1 ], CENTER ] 
    colWidths: [ "5cm", "25mm", "10mm", "30mm", "30mm", "20mm" ]

  # Arregla el TOC, que por algún motivo se descojona
  # -------------------------------------------------

  toc1:
    fontName: std
    fontSize: 9
    textColor: black

  # Adaptamos las cabeceras al formato de ingenieria
  # ------------------------------------------------

  heading:
    spaceBefore: 12
    spaceAfter: 12

  heading1:
    fontName: stdBold
    fontSize: 12
    spaceBefore: 0
    spaceAfter: 16

  heading2:
    fontName: stdBold
    fontSize: 10

  heading3:
    fontName: stdBold
    fontSize: 9

  heading4:
    fontName: stdBold
    fontSize: 9

  heading5:
    fontName: std
    fontSize: 9

  heading6:
    fontName: std
    fontSize: 9

  # Ajustamos los interlineados entre parrafos y listas
  # ---------------------------------------------------

  bodytext:
    spaceBefore: 10
    alignment: left
 
  bullet-list:
    spaceBefore: 0
    spaceAfter: 4
    commands: []
         [VALIGN, [ 0, 0 ], [ -1, -1 ], TOP ]
         [RIGHTPADDING, [ 0, 0 ], [ 1, -1 ], 8 ]

  bullet-list-item:
    spaceBefore: 2

  # Esto es una ñapa: como no se puede hacer que el
  # spacing de las listas anidadas se reduzca con respecto
  # al de las listas de primer nivel, defino una nueva
  # clase que aumenta el spacing.
  # -----------------------------------------------------.

  toplist:
    parent: bullet-list
    spaceBefore: 8
    spaceAfter: 4
