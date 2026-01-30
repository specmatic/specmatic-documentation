import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface MavenCoordinatesProps {
    groupId: string;
    artifactId: string;
    version: string;
}

export default function MavenCoordinates({
    groupId,
    artifactId,
    version,
}: MavenCoordinatesProps) {
    return (
        <Tabs groupId={`maven-${artifactId}`}>
            {/* Maven */}
            <TabItem value="maven" label="Maven">
                <p>Be sure to add the following repository to the <code>repositories</code> section of your <code>pom.xml</code> if you haven't already:</p>
                <pre><code className="language-xml">{`<repository>
    <id>specmatic-repo</id>
    <url>https://repo.specmatic.io/releases/</url>
</repository>`}</code></pre>

                <p>Then add the following dependency to the <code>dependencies</code> section of your <code>pom.xml</code>:</p>
                <pre><code className="language-xml">{`<dependency>
    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>
</dependency>`}</code></pre>
            </TabItem>

            {/* Gradle */}
            <TabItem value="gradle" label="Gradle">
                <p>Be sure to register the Specmatic repository in your <code>repositories</code> section if you haven't already:</p>
                <pre><code className="language-groovy">{`repositories {
    maven {
        url "https://repo.specmatic.io/releases/"
    }
}`}</code></pre>

                <p>Add the following dependency in the <code>dependencies</code> section:</p>
                <pre><code className="language-groovy">{`implementation '${groupId}:${artifactId}:${version}'`}</code></pre>
            </TabItem>

            {/* Gradle Kotlin DSL */}
            <TabItem value="gradle-kotlin" label="Kotlin DSL">
                <p>Be sure to register the Specmatic repository in your <code>repositories</code> section if you haven't already:</p>
                <pre><code className="language-kotlin">{`repositories {
    maven {
        url = uri("https://repo.specmatic.io/releases/")
    }
}`}</code></pre>

                <p>Add the following dependency in the <code>dependencies</code> section:</p>
                <pre><code className="language-kotlin">{`implementation("${groupId}:${artifactId}:${version}")`}</code></pre>
            </TabItem>
        </Tabs>
    );
}
