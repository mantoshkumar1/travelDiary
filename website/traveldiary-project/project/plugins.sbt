// Comment to get more information during initialization
logLevel := Level.Warn

// The Typesafe repository
resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"


// Use the Play sbt plugin for Play projects. We're using version 2.3.9!
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.3.9")
