rst2ing
=======

Set of libraries, images and stylesheets needed to produce a proper PDF (according to Consulting Services templates) from a RST document, using rst2pdf.

To generate a PDF from the RST file, you will need:

- The [rst2pdf](https://code.google.com/p/rst2pdf) tool.
- If you are using Windows, Office with Calibri and [BankGothic](http://en.wikipedia.org/wiki/Bank_Gothic) fonts installed.
- If you are using Unix, you will have to [install the fonts by yourself](http://wiki.inkscape.org/wiki/index.php/Installing_fonts).

Once the prerequisites are installed, run:

> rst2pdf -e src/filter.py -s doc/**document_type**/style.js -o <filename>.pdf <filename>.rst

To include the default cover into your document, begin your rst file with:

    .. include:: doc/<document_type>/cover.rst
    
    .. |Title|	replace:: <Title>
    .. |ref|    replace:: <Document_reference>
    .. |rev|    replace:: <Rev_number>
    .. |date| 	replace:: <Date>
    .. |doc|    replace:: <Document_code_(short_snippet)>
    .. |dept|   replace:: <Departament name>
