<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="xml"/>
<xsl:template match="/ploeg">
<team>
<xsl:for-each select="speler">
<xsl:sort select="naam"/>
<xsl:if test="aantal-doelpunten&gt;2">
<player>
<xsl:apply-templates select="naam" />
<xsl:apply-templates select="nummer" />
<xsl:apply-templates select="aantal-doelpunten" />
</player>
</xsl:if>
</xsl:for-each>
</team>
</xsl:template>

<xsl:template match="naam">
<name>
<xsl:value-of select="."></xsl:value-of>
</name>
</xsl:template>

<xsl:template match="nummer">
<number>
<xsl:value-of select="."></xsl:value-of>
</number>
</xsl:template>

<xsl:template match="aantal-doelpunten">
<goals>
<xsl:value-of select="."></xsl:value-of>
</goals>
</xsl:template>
</xsl:stylesheet>


