<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/bookstore">
        <html>
            <head>
                <title>Overzicht van boeken</title>
            </head>
            <body>
                <h1>Beschikbare boeken:</h1>
                <table>
                    <tr><th>titel</th><th>auteur</th><th>ISBN</th><th>prijs</th></tr>
                    <xsl:for-each select="./book">
                        <xsl:sort select="price" data-type="number" order="ascending"/>
                        <tr>
                        <td><xsl:value-of select="./title"/></td>
                        <td><xsl:value-of select="./author"/></td>
                        <td><xsl:value-of select="@ISBN"/></td>
                        <td><xsl:value-of select="./price"/></td></tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
