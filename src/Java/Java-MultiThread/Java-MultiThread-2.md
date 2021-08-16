---
icon: 
title: Java多线程-2
author: Draco
time: 2021-08-04 21:18:29
description: 
image: 
categories: 
  - Java
tags: 
  - 学习笔记
  - Java
  - 多线程


---



## Java线程同步机制



### 同步机制简介

对于同一个个许可证所保护的共享数据而言，任何线程访问这些共享数据前必须先持有该许可证。

- 一个线程只有在持有许可证的情况下才能够对这些共享数据进行访问；
- 一个许可证一 一次只能够被个线程持有；
- 许可证的持有线程在其结束对这些共享数据的访问后必须让出（释放） 其持有的许可证， 以便其他线程能够对这些共享数据进行访问。

一个线程在访间共享数据前必须申请相应的锁（许可证）， 线程的这个动作被称为锁的获得 (Acquire)。一个线程获得某个锁（持有许可证），我们就称该线程为相应锁的持 有线程（线程持有许可证），一个锁一次只能被一个线程持有。锁的持有线程可以对该锁所保护的共享数据进行访问，访问结束后该线程必须释放 (Release) 相应的锁。锁的持有 线程在其获得锁之后和 释放锁之前这段时间内所执行的代码被称为临界区 (Critical Section)。因此，共享数据只允许在临界区内进行访问，临界区一次只能被一个线程执行。



### 临界区

锁的持有线程在获得锁之后和释放锁之前这段时间内所执行的代码被称为临界区。共享数据只能在临界区内进行访问，临界区一次只能被一个线程执行。



### 锁简介

锁具有``排他性``，一次只能被一个线程持有，被称为``排它锁``或``互斥锁``。

按照虚拟机对锁的实现划分，分为

- 内部锁（Intrinsic Lock）：非公平锁，例如`sychronized`
- 显示锁（Explicit Lock）支持``非公平锁``和``公平锁``，例如JUC包下的`Lock`等实现类`ReentrenLock`



![互斥锁示意图](https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-MultiThread-2/%E4%BA%92%E6%96%A5%E9%94%81%E7%A4%BA%E6%84%8F%E5%9B%BE.png)





## 锁的概念



### 可重入性

一个线程在持有一个锁的时候还能够继续成功申请该锁，就称该锁具有可重入性，反之则称为非可重入性。

```java
void methodA() { 
  acquireLock(lock);／／申请锁lock
  ／／省略其他代码
  methodB(); 
  releaseLock(lock);／／释放锁lock
}

void methodB() { 
  acquireLock(lock);／／申请锁lock
  releaseLock(lock);／／释放锁lock
}
```

方法methodA使用了锁lock，该锁引导的临界区代码又调用了另外一个方法methodB,而方法methodB也使用了lock。那么， 这就产生了一个问题：methodA的执行线程持有锁 lock 的时候调用了methodB, 而methodB执行的时候又去申请锁lock, 而lock此时正被当前线程持有（未被释放）。那么，此时methodB究竟能否获得（申请成功） lock呢？可重入性就描述了这样一个问题。



#### 实现原理

可重入锁可以被理解为一个对象，该对象包含一个``计数器属性``。计数器属性的初始值为 0, 表示相应的锁还没有被任何线程持有。 

- 每次线程获得一个可重入锁的时候， 该锁的 计数器值会被增加1。 
- 每次一个线程释放锁的时候， 该锁的计数器属性值就会被减1。 

可重入锁的持有线程初次获得该锁时相应的开销相对大，这是因为该锁的持有线程必须与其他线程 ”竞争” 以获得锁。 

可重入锁的持有线程继续荻得相应锁所产生的开销要小得 多，这是因为此时Java虚拟机只需要将相应锁的计数器属性值增加1即可以实现锁的获得。



### 锁的粒度

一个锁实例可以保护一个或者多个共享数据，一个实例所保护的共享数据的数量大小就被称为该锁的粒度，锁保护的共享数据越大，我们就称该锁的粒度越粗，反之则称粒度细。



## 锁的开销



- 锁的申请和释放所产生的开销（主要是时间开销）
- 锁的上下文切换（主要是时间开销）：锁作为一种排他性资源，一旦被争用就可能导致上下文切换，而没有被争用的锁则可能不会导致上下文切换
- 锁泄露
- 死锁锁死活锁饿死等线程其他活性故障。



### 锁泄露

锁泄露指一个线程获得该锁之后，由于程序的错误、缺陷导致该锁一直无法被释放而其他线程一直无法获得该锁的现象。因此，锁泄露会导致同步在该锁上的所有线程都无法进展。





## Sychronized（内部锁）



### 参考

- [关键字: synchronized详解](https://www.pdai.tech/md/java/thread/java-thread-x-key-synchronized.html)
- [jvm：ObjectMonitor源码](https://blog.csdn.net/zwjyyy1203/article/details/106217887)
- [Java并发基石——所谓“阻塞”：Object Monitor和AQS（1）](https://blog.csdn.net/yinwenjie/article/details/84922958)
- [锁升级过程](https://blog.csdn.net/zzti_erlie/article/details/103997713?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)





### 简介

Java平台中的任何一个对象都有唯一一个与之关联的锁。 这种锁被称为``监视器 (Monitor)``或者``内部锁 (Intrinsic Lock)``。内部锁是一种``排他锁``，它能够保障

- 原子性
- 可见性
- 有序性

内部锁是通过 synchronized 关键字实现的。



### 使用方法

- synchronized修饰的实例方法：多线程并发访问时，只能有一个线程进入，获得``对象内置锁``，其他线程阻塞等待，但在此期间线程仍然可以访问其他方法。
- synchronized修饰的静态方法：多线程并发访问时，只能有一个线程进入，获得``类锁``，其他线程阻塞等待，但在此期间线程仍然可以访问其他方法。
- synchronized修饰的代码块，：多线程并发访问时，只能有一个线程进入，根据``括号中的对象或者是类``，获得相应的对象内置锁或者是类锁
- 同步方法的整个方法体就是一个临界区。



> 每个类都有一个类锁，类的每个对象也有一个内置锁，它们是互不干扰的，也就是说一个线程可以同时获得``类锁``和该类实例化``对象的内置锁``，当线程访问非synchronzied修饰的方法时，并不需要获得锁，因此不会产生阻塞。



```java
Synchronized(锁句柄){
    //在此代码块访问共享数据
}
```

synchronized关键字所引导的代码块就是临界区 。锁句柄是一个对象的引用（或者能够返回对象的表达式）。例如，锁句柄可以填写为this 关键字（表示当前对象）。

习惯上我们也直接称锁句柄为锁。锁句柄对应的监视器就被称为相应同步块的引导锁。相应地， 我们称呼相应的同步块为该锁引导的同步块。

> 锁句柄通常采用final修饰（private final）。这是因为锁句柄的值一旦改变，会导致同一个代码块的多个线程实际上使用不同的锁，而导致竞态。



### 同步静态方法

```java
public class SynchronizedMethodExample {
    public static sysnchronized void staticMethod(){
        //在此访问共享数据
    }
    //...
}

//相当于
public class SynchronizedMethodExample {
    public static void staticMethod(){
        sysnchronized(SynchronizedMethodExample.class){
             //在此访问共享数据
        }
    }
    //...
}
```

线程在执行临界区代码的时候必须持有该临界区的``引导锁``。一个线程执行到同步代码块必须申请该同步块的引导锁，只有申请成功该锁的线程才能够执行相的应临界区。

一旦执行完临界区代码，引导该临界区的锁就会被自动释放。整个内部锁申请和释放的过程都是由``java虚拟机``负责实施的，所以synchronized实现的锁被称为``内部锁``。

**内部锁不会导致锁泄露**，java编译器在将同步代码块编译成字节码的时候，对临界区可能抛出的异常（未被捕获）进行了处理，所以即使临界区代码抛出异常也不会妨碍内部锁的释放。





### 内部锁的调度

概念

- 监控区（Entry Set）：锁已被其他线程获取，期待获取锁的线程就进入Monitor对象的监控区
- 待授权区（Wait Set）：曾经获取到锁，但是调用了wait方法，线程进入待授权区



Java虚拟机会为每个内部锁分配一个``入口集(Entry List)``， 用于记录等待获得相应内部锁的线程。

多个线程申请同一个锁的时候，只有一个申请者能够成为该锁的持有线程（即申请锁的操作成功）， 而其他申请者的申请操作会失败。 这些申请失败的线程并不会抛出异常， 而是会被暂停（生命周期状态变为`BLOCKED`) 并被存入相应锁的入口集中等待再次申请锁的机会。 

入口集中的线程就被称为相应内部锁的等待线程。当这些线程申请的锁被其持有线程释放的时候， **该锁的入口集中的一个任意线程会被Java虚拟机唤醒**， 从而得到再次申请锁的机会。 

由于Java虚拟机对内部锁的调度``仅支持非公平调度``， 被唤醒的等待线程占用处理器运行时可能还有其他新的活跃线程 （处于 RUNNABLE状态，且未进入过入口集）与该线程抢占这个被释放锁， 因此被唤醒的线程不一定就能成为该锁的持有 线程。

另外，Java虚拟机如何从一个锁的入口集中选择一个等待线程，作为下一个可以参与再次申请相应锁的线程，这个细节与Java虚拟机的具体实现有关：这个被选中的线程有可能是入口集中等待时间最长的线程， 也可能是等待时间最短的线程，或者完全是随机。



![img](https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-MultiThread-2/%E5%86%85%E9%83%A8%E9%94%81%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2%E5%9B%BE.png)





### 锁升级过程

- [锁升级过程](https://blog.csdn.net/zzti_erlie/article/details/103997713?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)
- https://blog.csdn.net/zwjyyy1203/article/details/106217887





![preview](https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-MultiThread-2/%E9%94%81%E5%8D%87%E7%BA%A7%E8%BF%87%E7%A8%8B.jpg)



## Lock接口（显示锁）

jdk1.5引入的排他锁，其作用于内部锁相同， 但是它提供了一些内部锁所不具备的特性。显示锁是`java.util.concurrent.locks.Lock`接口的实例，`java.util.concurrent.locks.Lock`是它的默认实现类



### 常用方法

|                                    |                                                        |
| ---------------------------------- | ------------------------------------------------------ |
| void lock()                        | 获取锁                                                 |
| void lockInterruptibly()           | 如果当前线程未被中断，则获取锁                         |
| newCondition()                     | 返回绑定到此Lock实例的新Conditon实例                   |
| tryLock()                          | 仅在调试时锁为空闲状态才获取锁                         |
| tryLock(long time, TimeUnit uinit) | 如果说在给定的时间空闲，并且当前线程未被中断，则获取锁 |
| unlock()                           | 释放锁                                                 |



### 显示锁的调度

可以根据``ReentrantLock(boolean fail)`` 指定公平和非公平锁，true为公平锁

公平锁保障锁调度的公平性往往是以增加上下文切换为代价的，因此显式锁默认非公平调度策略，适合``````锁被持有时间相对长``和``线程申请锁的平均间隔时间相对长``的情形。

总的来说，公平锁开销大于非公平锁.





## Synchronized 和 ReenTrantLock



### 对比

**1. 锁的实现**

synchronized 是 JVM 实现的，而 ReentrantLock 是 JDK 实现的。



**2. 性能**

新版本 Java 对 synchronized 进行了很多优化，例如自旋锁等，synchronized 与 ReentrantLock 大致相同。



**3. 等待可中断**

ReentrantLock 可中断，而 synchronized 不行

当持有锁的线程长期不释放锁的时候，正在等待的线程可以选择放弃等待，改为处理其他事情。



**4. 公平锁**

synchronized 中的锁是非公平的，ReentrantLock 默认情况下也是非公平的，但是也可以是公平的。

公平锁是指多个线程在等待同一个锁时，必须按照申请锁的时间顺序来依次获得锁。



**5. 锁绑定多个条件**

一个 ReentrantLock 可以同时绑定多个 Condition 对象，通过调用``newCondition()``方法来创建。



**6. 是否可重入**

两者都是可重入锁。

“可重入锁”概念是：自己可以再次获取自己的内部锁。比如一个线程获得了某个对象的锁，此时这个对象锁还没有释放，当其再次想要获取这个对象的锁的时候还是可以获取的，如果不可锁重入的话，就会造成死锁。同一个线程每次获取锁，锁的计数器都自增1，所以要等到锁的计数器下降为0时才能释放锁。



**7. 异常处理&锁泄露**

synchronized 异常就会自动释放锁来避免``锁泄露``，而 ReenTrantLock 异常需要在 finally 里 unlock。

通过反编译可以看到sychronized有两个释放锁标志`monitorexit`，最后一个`monitorexit`是用于如果同步代码块中出现``Exception或者Error`，则会调用第二个`monitorexit`指令来保证释放锁



**8. 灵活性**

内部锁是基于代码块的锁，灵活性较差，要么使用，用么不使用；

而显示锁是基于对象的锁，灵活性强，比如可以在一个方法内申请锁，在另一个方法释放锁，而内部锁是无法做到的。



### ReenTrantLock的高级功能

ReenTrantLock 比 synchronized 增加了一些高级功能。主要有三点

1. 等待可中断
2. 可指定公平和非公平锁
3. 可实现选择性通知（锁可以绑定多个条件）





- **ReenTrantLock提供了一种能够中断等待锁的线程的机制**，通过**lock.lockInterruptibly()**来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。
- **ReenTrantLock可以指定是公平锁还是非公平锁。而synchronized只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。** ReenTrantLock默认情况是非公平的，可以通过 ReenTrantLock类的`ReentrantLock(boolean fair)`构造方法来制定是否是公平的。
- **synchronized关键字与wait()和notify/notifyAll()方法相结合可以实现等待/通知机制**，ReentrantLock类当然也可以实现，但是需要借助于Condition接口与newCondition() 方法。Condition是JDK1.5之后才有的，它具有很好的灵活性，比如可以实现多路通知功能也就是在一个Lock对象中可以创建多个Condition实例（即对象监视器），**线程对象可以注册在指定的Condition中，从而可以有选择性的进行线程通知，在调度线程上更加灵活。 在使用notify/notifyAll()方法进行通知时，被通知的线程是由 JVM 选择的，用ReentrantLock类结合Condition实例可以实现“选择性通知”** ，这个功能非常重要，而且是Condition接口默认提供的。而synchronized关键字就相当于整个Lock对象中只有一个Condition实例，所有的线程都注册在它一个身上。如果执行notifyAll()方法的话就会通知所有处于等待状态的线程这样会造成很大的效率问题，而Condition实例的signalAll()方法 只会唤醒注册在该Condition实例中的所有等待线程。

如果你想使用上述功能，那么选择ReenTrantLock是一个不错的选择。



### 使用选择

除非需要使用 ReentrantLock 的高级功能，否则优先使用 synchronized。这是因为 synchronized 是 JVM 实现的一种锁机制，JVM 原生地支持它，而 ReentrantLock 不是所有的 JDK 版本都支持。并且使用 synchronized 不用担心没有释放锁而导致死锁问题，因为 JVM 会确保锁的释放。



### 性能已不是选择标准

在JDK1.6之前，synchronized 的性能是比 ReenTrantLock 差很多。**具体表示为：synchronized 关键字吞吐量随线程数的增加，下降得非常严重。而ReenTrantLock 基本保持一个比较稳定的水平**。我觉得这也侧面反映了， synchronized 关键字还有非常大的优化余地。后续的技术发展也证明了这一点，我们上面也讲了在 JDK1.6 之后 JVM 团队对 synchronized 关键字做了很多优化。**JDK1.6 之后，synchronized 和 ReenTrantLock 的性能基本是持平了。所以网上那些说因为性能才选择 ReenTrantLock 的文章都是错的！JDK1.6之后，性能已经不是选择synchronized和ReenTrantLock的影响因素了！而且虚拟机在未来的性能改进中会更偏向于原生的synchronized，所以还是提倡在synchronized能满足你的需求的情况下，优先考虑使用synchronized关键字来进行同步！优化后的synchronized和ReenTrantLock一样，在很多地方都是用到了CAS操作**。
