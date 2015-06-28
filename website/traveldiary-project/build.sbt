import play.Play.autoImport._
import sbt.Keys._
import sbt._

name := "traveldiary"

version := "1.0"

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.3.0-3",
  // BEGIN NOTE
  // We explicitly define both angular/angularjs libraries as dependencies. angularjs provides angular.js which is the
  // one that will be imported and used in code. Since angular-ui-router etc. depend on the angular package we force
  // them to use version 1.4.1 as well. We can then safely use the angular.js file from angularjs instead of angular.
  "org.webjars" % "angularjs" % "1.4.0",
  "org.webjars.bower" % "angular" % "1.4.0",
  // END NOTE
  "org.webjars" % "angular-ui-router" % "0.2.15",
  "org.webjars" % "angular-material" % "0.10.0",
  "org.webjars.bower" % "angular-material-icons" % "0.4.0",
  "org.webjars.bower" % "bootstrap" % "3.3.5",
  "org.webjars.bower" % "angular-animate" % "1.4.0",
  "org.webjars.bower" % "angular-aria" % "1.4.0",
  "org.webjars.bower" % "js-data-angular" % "2.4.0",
  "org.webjars.bower" % "angular-bootstrap" % "0.13.0",
  "org.webjars.bower" % "angular-filter" % "0.5.4",
  "org.webjars" % "jquery" % "2.1.4",
  javaJdbc,
  "org.xerial" % "sqlite-jdbc" % "3.8.6",
  javaJpa.exclude("org.hibernate.javax.persistence", "hibernate-jpa-2.0-api"),
  "org.hibernate" % "hibernate-entitymanager" % "4.3.9.Final" // replace by your jpa implementation
)

includeFilter in (Assets, LessKeys.less) := "main_less.less"

lazy val root = (project in file(".")).enablePlugins(PlayJava,SbtWeb)