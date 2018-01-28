<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" />
    <xsl:template match="/items">
        <CDoverzicht>
            <xsl:for-each select="item">
                <xsl:sort select="omschrijving"/>
                <xsl:if test="categorie='CD'">
                    <CD><xsl:value-of select="omschrijving" />
                    </CD>
                </xsl:if>
            </xsl:for-each>
        </CDoverzicht>
    </xsl:template>
</xsl:stylesheet>
<!-- 
    gegeven: items.xml
    gevraagd: en xml-file met een alfabetisch gesorteerd overzicht van de 
               omschrijvingen van alle CD's uit items.xml
    gewenst formaat: 
        <CDoverzicht><CD> ..... </CD><CD> ..... </CD>
          ...
        </CDoverzicht>
    oplossing: items.xsl
-->
