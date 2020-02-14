---
home: true
heroImage: /images/dunwu-logo-200.png
heroText: JAVATECH
tagline: ☕ javatech 汇总了 Java 开发中常见的主流技术的应用、特性、原理。
actionLink: /
footer: CC-BY-SA-4.0 Licensed | Copyright © 2018-Now Dunwu
---

# JAVATECH

![license](https://badgen.net/github/license/dunwu/javatech)

> ☕ **javatech** 汇总了 Java 开发中常见的主流技术的应用、特性、原理。
>
> - 🔁 项目同步维护：[Github](https://github.com/dunwu/javatech/) | [Gitee](https://gitee.com/turnon/javatech/)
> - 📖 电子书阅读：[Github Pages](https://dunwu.github.io/javatech/) | [Gitee Pages](http://turnon.gitee.io/javatech/)
>
> 说明：下面的内容清单中，凡是有 📚 标记的技术，都已整理成详细的教程。

## 框架

- [Spring](https://dunwu.github.io/spring-tutorial/) 📚
- [Spring Boot](https://dunwu.github.io/spring-boot-tutorial/) 📚
- [Mybatis](framework/mybatis.md)
- [ShardingSphere](storage/shardingsphere.md)

## 消息队列

> 消息队列（Message Queue，简称 MQ）技术是分布式应用间交换信息的一种技术。
>
> 消息队列主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。
>
> 如果想深入学习各种消息队列产品，建议先了解一下 [消息队列基本原理](https://github.com/dunwu/blog/blob/master/source/_posts/distributed/mq-theory.md) ，有助于理解消息队列特性的实现和设计思路。

- [消息队列面经](mq/mq-interview.md)
- [Kafka](mq/kafka)
- [RocketMQ](mq/rocketmq.md)
- [ActiveMQ](mq/activemq.md)

## 缓存

> 缓存可以说是优化系统性能的第一手段，在各种技术中都会有缓存的应用。
>
> 如果想深入学习缓存，建议先了解一下 [缓存基本原理](https://github.com/dunwu/blog/blob/master/source/_posts/distributed/cache-theory.md)，有助于理解缓存的特性、原理，使用缓存常见的问题及解决方案。

- [缓存面经](cache/CacheInterview.md)
- [Redis](https://github.com/dunwu/db-tutorial/tree/master/docs/nosql/redis) 📚
- [Ehcache](cache/Ehcache.md)
- [Caffeine](cache/Caffeine.md)

## 微服务

- [Dubbo](soa/dubbo.md)
- Spring Cloud
- [ZooKeeper](soa/zookeeper)
- Eureka
- Consul
- Nacos
- Zuul
- Gateway

## 搜索引擎

- [ElasticSearch](search/elasticsearch)
- Solr
- Lucene

## 安全

> Java 领域比较流行的安全框架就是 shiro 和 spring-security。
>
> shiro 更为简单、轻便，容易理解，能满足大多数基本安全场景下的需要。
>
> spring-security 功能更丰富，也比 shiro 更复杂。值得一提的是由于 spring-security 是 spring 团队开发，所以集成 spring 和 spring-boot 框架更容易。

- [Shiro](security/shiro.md)
- [Spring Security](security/spring-security.md)

## 测试

- [Junit](test/junit.md)
- [Mockito](test/mockito.md)
- [JMH](test/jmh.md)
- [Jmeter](test/jmeter.md)

## 服务器

> Tomcat 和 Jetty 都是 Java 比较流行的轻量级服务器。
>
> Nginx 是目前最流行的反向代理服务器，也常用于负载均衡。

- [Tomcat](server/tomcat.md)
- [Jetty](server/jetty.md)
- [Nginx](https://github.com/dunwu/nginx-tutorial) 📚

## LIB

- [日志](lib/javalib-log.md) - log4j2、logback、log4j、Slf4j
- [序列化](lib/serialized/)
  - [JSON](lib/serialized/javalib-json.md) - Fastjson、Jackson、Gson
  - [二进制](lib/serialized/javalib-binary.md) - Protobuf、Thrift、Hessian、Kryo、FST
- [模板引擎](lib/template) - [Freemark](lib/template/freemark.md)、[Velocity](lib/template/velocity.md)、[Thymeleaf](lib/template/thymeleaf.md)
- JavaBean - [Lombok](lib/bean/lombok.md)、[Dozer](lib/bean/dozer.md)
- 工具包 - Apache Common、Guava、Hutool
