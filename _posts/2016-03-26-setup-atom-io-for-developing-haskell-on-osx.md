---

layout: post
comments: true

group: blog
title: "Set up Atom.io for developing Haskell on OS X"
tags:
- Haskell
status: publish
type: post
published: true

---

This is a step by step guide to setup [Atom.io](https://atom.io/) for developing [Haskell](https://www.haskell.org/) on OS X (El Capitan). It highlights some extra configuration notes to avoid any issues I had today.

<!--more-->

## Screenshot
If you will finish all the steps you should be able to do write some fancy Haskell stuff with Atom.io like a Pro :-)

![screenshot atom.io + haskell](/blog/uploads/2016/03/29/screenshot_atom_editor_haskell.gif)


## 1. Preconditions

First of all we have to install [ghc](https://www.haskell.org/ghc/), which is the Glasgow Haskell Compiler and [cabal](https://www.haskell.org/cabal/) as a package system for Haskell. We are using [brew](http://brew.sh/) to install both on OS X as follow:

{% highlight bash %}
brew install ghc
brew install cabal-install
{% endhighlight %}

## 2. Install Cabal packages

Now we do need to install following cabal packages:

- [happy](https://hackage.haskell.org/package/happy) is a parser generator for Haskell

{% highlight bash %}
cabal install happy
{% endhighlight %}


- [ghc-mod](https://hackage.haskell.org/package/ghc-mod) is a backend program to enrich Haskell programming in editors.

{% highlight bash %}
cabal install ghc-mod
{% endhighlight %}

- [stylish-haskell](https://hackage.haskell.org/package/stylish-haskell) is a Haskell code prettifier.

{% highlight bash %}
cabal install stylish-haskell
{% endhighlight %}


## 3. Install and setup Atom packages

Finally we have to install all needed Atom packages by opening `Atom ->  Settings View -> Install Packages and Themes`.

Please note: Some of following packages are depending on each other. That's why it is recommended to install all together.

If there a need of setting a custom configuration option it will be highlighted as `custom configuration` it the following list. After a package is installed You can set this custom option opening `Atom -> Settings View -> Packages  -> {your package} - Settings`.

Ok, lets start to install and setup the following packages:

- [ide-haskell](https://atom.io/packages/ide-haskell) Haskell IDE

{% highlight bash %}
# absolute path to stylish-haskell
"Stylish Haskell Path": /Users/{username}/.cabal/bin/stylish-haskell
{% endhighlight %}

If you are unsure what the path to `stylish-haskell` is, just check it as follow:
{% highlight bash %}
which stylish-haskell
{% endhighlight %}

- [language-haskell](https://atom.io/packages/language-haskell)
Haskell language support in Atom

- [ide-haskell-cabal](https://atom.io/packages/ide-haskell-cabal)
Provides Cabal backend for ide-haskell

{% highlight bash %}
# version of GHC
"Active GHC version": 7.10
{% endhighlight %}

You can check your installed `ghc` version as follow:
{% highlight bash %}
ghc --version
{% endhighlight %}

It should be output something like this:

{% highlight bash %}
The Glorious Glasgow Haskell Compilation System, version 7.10.3
{% endhighlight %}

- [autocomplete-haskell](https://atom.io/packages/autocomplete-haskell) Autocomplete-plus provider for haskell

{% highlight bash %}
# name of the backend to use
"Use Backend": haskell-ghc-mod
{% endhighlight %}

- [haskell-ghc-mod](https://atom.io/packages/haskell-ghc-mod) Provides backends for `ide-haskell` and `autocomplete-haskell`

{% highlight bash %}
# path to directory of cabal's binaries
"Additional Path Directories": /Users/{username}/.cabal/bin/
{% endhighlight %}

The location of `cabal` can be found by:
{% highlight bash %}
which cabal
{% endhighlight %}

- [ide-haskell-repl](https://atom.io/packages/ide-haskell-repl)
Haskell REPL support for ide-haskell

{% highlight bash %}
# any REPL command, not needed by ghci
"Command Args": none
# path to ghci (GHC interpreter)
"Command Path": /usr/local/bin/ghci
{% endhighlight %}

To get the location of `ghci` just check it with:
{% highlight bash %}
which ghci
{% endhighlight %}


We are done! I hope you will have a nice Haskell running Atom editor right now :)

## 4. Questions?

If you have any questions or improvements, feel free to leave a comment or tweet to me [@sectore](https://twitter.com/sectore)

Have fun!

-Jens
