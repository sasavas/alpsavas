---
title: "My First Blog Post"
date: "2024-09-05"
author: "Alp Savas"
tags: ["Next.js", "Markdown", "Blog"]
description: "A brief description of my first blog post."
excerpt: "TypeScript’i JavaScript’ten bağımsız olarak ele almak mümkün değil. Bu yüzden kısaca JavaScript programlama dilinden bahsederek başlamak istiyorum. JavaScript, internetin henüz daha yeni yaygınlaşmaya başladığı, web üzerinde sadece statik dokümanların ve bilgilerin paylaşıldığı bir dönemde, 1995 yılında, web’e hareket kazandırmak, web’i daha etkileşimli bir hale getirmek için zamanın önde gelen"
---

Herkese merhaba, bu yazıda TypeScript programlama dilinden, özelliklerinden, kullanıldığı ortamlardan ve bilgisayarımıza TypeScript kurulumundan bahsedeceğim.

TypeScript’i JavaScript’ten bağımsız olarak ele almak mümkün değil. Bu yüzden kısaca JavaScript programlama dilinden bahsederek başlamak istiyorum. JavaScript, internetin henüz daha yeni yaygınlaşmaya başladığı, web üzerinde sadece statik dokümanların ve bilgilerin paylaşıldığı bir dönemde, 1995 yılında, web’e hareket kazandırmak, web’i daha etkileşimli bir hale getirmek için zamanın önde gelen firmalarından Netscape bünyesinde Brendan Eich isimli bir bilgisayar mühendisi tarafından 10 gün gibi kısa bir süre içerisinde geliştirildi ve piyasaya sürüldü. İsminin Java programlama diline benzemesi ise tabii ki tesadüf değil. O zamanlarda, ‘write once, run everywhere’ prensibiyle tek bir codebase ile tüm işletim sistemlerinde çalışabilen bir programlama dili ve ekosistemi olarak daha yeni piyasaya sürülmüş olan Java’nın popülaritesinden faydalanmak için Java’nın geliştiricisi Sun Microsystem firmasıyla da anlaşılarak web’de çalışacak bu yeni programlama dilinin isminin JavaScript olmasında karar kılındı.

Yıllar içinde web’in popülerleşmesiyle daha interaktif web uygulamaları geliştirildi ve JavaScript programlama dilinden beklentiler de gittikçe arttı. JQuery gibi efektif geliştirme sağlayan kütüphaneler yayınlandı. Sonra, JavaScript dilinin esnekliğinden sadece tarayıcılarda değil, backend tarafında da (web api’ler, servisler, console uygulamaları gibi) uygulamalar geliştirmek için faydalanılmasını sağlayan ‘nodejs’ isimli bir runtime environment geliştirildi. Google’ın web tarayıcısında kullandığı açık kaynaklı V8 motoru baz alınarak Ryan Dahl tarafından geliştirilen bu aracın 2009 yılında ilk versiyonu yayımlandı. Bu, hızlı bir JavaScript framework çılgınlığının başlangıcı oldu ve o günden bugüne yüzlerce JavaScript frameowk’ü geliştirildi.

JavaScript’in ilk amaçlandığı gibi (dynamically typed vs. özellikleri sebebiyle) süper esnek bir dil olması ve hataları tolere etmekte fazlaca hoşgörülü davranması büyük çaplı codebase’lerde bazı hataların gözden kaçmasına sebebiyet vererek geliştirmeyi zorlaştırıyordu. Bu yüzden JavaScript’i daha güvenli hale getirmek için yapılan girişimlerden biri de 2012 yılında Microsoft bünyesinde (Delphi ve C# gibi programlama dillerinin de yazarı olan) Anders Hajlsberg isimli mühendis tarafından geliştirilen TypeScript oldu. JavaScript’te yazılan bir kodun ufak tefek istisnalar dışında, olduğu gibi TypeScript’te de geçerli olması ve bu durumun mevcut JavaScript codebase’lerinin TypeScript’e taşınmasını kolaylaştırması sayesinde kısa zamanda popülerlik kazandı ve JavaScript ekosisteminde en baskın araç haline geldi. Günümüzde JS ile geliştirilen gerek frontend gerekse backend uygulamarı için kullanılan başta React, Angular, Next, Express, Nestjs olmak üzere yaygın kütüphane ve framework’lerin neredeyse tamamı TypeScript’i desteklemekte, hatta pek çoğu TypeScript’i varsayılan olarak kabul etmektedir.

Kişisel olarak JavaScript’e olduğu haliyle bile hayranlık duysam da ilk defa bir React projesinde TypeScript ile geliştirme yaptığımda sağladığı özellikler ve kolaylıklar karşısında ufkum açılmıştı ve o günden sonra TypeScript kullanma şansım olan tüm uygulama ve codebase’lerde TypeScript kullandım. TypeScript’in geliştiriciye belirli yöntemleri ve kuralları dayatmaması, sağladığı özelliklerinin proje bazında on/off konfigüre edilebilir olması pek çok geliştiricinin de aynı düşüncelere sahip olmasında en büyük etkenlerden biridir.

JavaScript’te yazılan bir kodun TypeScript’te te çalıştığından bahsettik. Genel olarak da hemen hemen tüm kaynaklarda TypeScript’in JavaScript’in bir üst kümesi olduğundan bahsedilir. Bu sebeple JavaScript’e dair öğreneceğimiz her şey aslında TypeScript de öğrenmemizi sağlar. Zira TypeScript, JavaScript’in temel özelliklerini ve çalışma zamanında öngörülen davranışlarını değiştirmez. JavaScript programlama dili hakkında bilgi edinmek ve bu dili derinlemesine öğrenmek için en iyi kaynaklardan biri şüphesiz [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) adresine giderek JavaScript öğrenmeye başlayabilirsiniz. MDN’de aynı zamanda (HTML, CSS, HTTP başta olmak üzere)  web’in temelleriyle alakalı pek çok konuda da bilgi edinebilirsiniz.

Gelelim nihayet TypeScript’e. [TypeScript’in resmi web sitesinin başlangıç adresinde](https://www.typescriptlang.org/) dilin tanıtımını ve en temelde sağladığı faydaları örnekler üzerinden görebilirsiniz. Yazılım öğrenme yolculuğunuzun daha başlarındaysanız [bu adresten](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) başlamanız faydalı olacaktır. Eğer TypeScript’i etraflıca öğrenmek, çoğu özelliğini detaylı bir şekilde ele almak isterseniz de [bu adresteki](https://www.typescriptlang.org/docs/handbook/intro.html) TypeScript ‘el kitabı’nı (online ve ücretsiz olarak) okuyabilirsiniz. Hands-on pratik yapmak, TypeScript’in JavaScript’e nasıl derlendiğini gözlemlemek ve örnek kod parçalarını çalıştırmak için ise kendi cihazınızda hiç bir kurulum yapmadan ücretsiz [Playground’u](https://www.typescriptlang.org/play) kullanabilirsiniz.

TypeScript’i gördünüz, beğendiniz ve teknik bilgi dağarcığınıza eklemeye karar verdiniz diyelim. Kendi uygulamalarınızı geliştirmek için bilgisayarınıza bazı kurulumlar yapmanız gerekiyor. İşletim sistemine göre bazı değişiklikler gösterse de genel hatlarıyla hangi araçları ne sırayla kurmanız gerektiğini adım adım inceleyelim.

Nodejs: Öncelikli olarak  JavaScript’in çalıştırılabileceği bir runtime olan Nodejs kurulumuyla başlayaylım. [Buradan](https://nodejs.org/) son güncel sürümü (LTS - Long Term Support), (bu yazının yayınlanması itibariyle versiyon 20.17.0) indirip kurulum sihirbazını takip ederek kurulumunuzu gerçekleştirebilirsiniz. 

Nodejs kurulumuyla birlikte NPM (Node Package Manager) de otomatik olarak yüklenecektir. MacOS kullanıyorsanız Terminal uygulamasını, Windows kullanıyorsanız da Cmd/Powershell uygulamalarından birini açarak aşağıdaki komutları çalıştırıp kurulumunuzu teyit edebilirsiniz. Komut satırı uygulamasını açmak için MacOS’te (Baştaki dolar ‘$’ işaretini yazmayın. $, mevcut satırın komut satırında çalıştırılabilecek bir komut olduğunu ifade etmek için kullanılır.) Windows’ta komut satırını açmak için Windows + R tuşlarına aynı anda basarak "Çalıştır" penceresini açın. Açılan kutuya "cmd" yazın ve Enter tuşuna basın. MacOS’te uygulamalar klasöründe Terminal uygulamasını bulun ve açın.

```bash
$ node -v
```

```bash
$ npm -v 
```

TypeScript: NPM kullanarak yine komut satırı üzerinden bilgisayarınıza TypeScript kurulumu yapabilirsiniz. Bunun için aşağıdaki komutu çalıştırmanız yeterli olacaktır.

```bash
$ npm install -g typescript
```

TypeScript’in başarılı bir şekilde kurulduğunu teyit etmek için aşağıdaki komutu çalıştırın.

```bash
$ tsc -v
```

İşte bu kadar basit. Artık bilgisayarınızda TypeScript kodu yazıp çalıştırabilirsiniz. React, Angular gibi uygulamalar yapmak için tabii ki daha fazlasına ihtiyaç var. Bu konuları da daha sonraki yazılarımda ele alacağım.

Visual Studio Code: VS Code başta JavaScript/TypeScript olmak üzere yazılım geliştirmek için kullanılan en popüler Code Editor’üdür. [Bu adresten](https://code.visualstudio.com) işletim sisteminize uygun sürümünü indirip, kurulum sihirbazını takip ederek bilgisayarınıza kurabilirsiniz. 

Hello, world!: Başlangıç amacıyla küçük bir ‘Hello, World’ uygulaması yapmak için gerekli adımları aşağıdan takip edebilirsiniz.

Proje dizini oluşturma:

```bash
$ mkdir projenizin-adı
$ cd projenizin-adı
```

TypeScript başlatma:

```bash
$ tsc —init 
```

Bu komut, tsconfig.json dosyasını oluşturur ve temel yapılandırmayı sağlar.

Yeni oluşturduğunuz bu projeyi VS Code uygulamasında açmak için komut satırında bulunduğunuz dizinde `code .` komutunu çalıştırabilirsiniz veya VS Code’u açarak ilgili dizini seçip açabilirsiniz.

`index.ts` isminde bir dosya oluşturun. İçerisine aşağıdaki kodu yazın:

```TypeScript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```


TypeScript dosyasını JavaScript’e derleyin:

```bash
$ tsc index.ts
```

Bu komut, dosyanın bulunduğu dizinde ‘index.js’ isminde bir JavaScript dosyası oluşturacaktır.

Nodejs ile JavaScript dosyasını çalıştırma:

```bash
$ node index.js
```

Ekranda “Hello, world!” çıktısını gördüyseniz TypeScript ile ilk uygulamanızı başarılı bir şekilde geliştirdiniz demektir. Tebrikler!