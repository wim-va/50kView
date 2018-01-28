<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method= "text" indent="yes"/>
    <xsl:template match="/opleiding">Overzicht deelnemers opleiding <xsl:value-of select="./titel" /><xsl:text>&#xA;</xsl:text>s
        <xsl:for-each select="./deelnemers/deelnemer">
            <xsl:value-of select = "."  /><xsl:text>&#xA;</xsl:text>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>

