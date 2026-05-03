# Real-Time Communication (RTC) Servers Implementation

This repository consists of the basic source code of Long-Polling, Server-Sent Events (SSE),  and WebSocket servers, which are the three most-popular techniques/approaches for implementing real-time communication (RTC) feature in Web Applications.

A huge thanks to my mentors "[Ms. Shradha Khapra](https://github.com/shradha-khapra) && [Sr. Hitesh Choudhary](https://github.com/hiteshchoudhary)" for teaching me this valuable topic in Web-Dev via their free YT Videos: [Video1](https://youtu.be/favi7avxIag?si=Brol9DvZgHhAlE7l), and [Video2](https://youtu.be/_CCyMWSZNU4?si=__w7972lOYGxwJF-), respectively, which are kinda "Crash Course" on RTC, but the quality is very good, as it teaches us about the fundamentals of RTC, advantages & disadvantages of each techniques, and their basic implementation.

The only reason I have created this repository is to store the source code of all three techniques in one place, so that I can easily refer to it whenever I need to implement RTC feature in my future projects.

## Explanation of Every Technique:

<details>
<summary><font size="4"><b>Long-Polling</b></font></summary>

It's a technique of implementing RTC in which the client will be sending HTTP-Requests to the Server asking for any updates, and if there any updates only then the Server will respond to the Client, or else the Server will not send any response to the client.
The term "polling" refers to "waiting" in this context, as the server doesn't immediately sends a response to the client, even if there's an update, rather it waits for a specific time-duration, before sending a response to the client.
The HTTP Calls (request-response cycles) used in this technique is Unary, means Uni-directional (info is transmitted from one device to another at a time) and connection is stateless (server doesn't stores any info about the client, as the complete info is contained in HTTP Calls' headers and body).

* <b>Advantages:</b>
    1. Easier to Implement, if the you already know/skilled in implementing REST APIs.
    2. Very Versatile, as it can be used everywhere (both older & modern systems).
    3. Absolute technique for connecting with a server which is behind Proxy(s).

* <b>Disadvantages:</b>
    1. High Latency, 'cause server waits for a specific time duration before responding.
    2. Wastage of Resources, 'cause client sends multiple

</details>


<details>
<summary><font size="4"><b>Server-Side Events (SSE)</b></font></summary>

It is another popluar technique of implementing RTC which is almost the opposite of "Long Polling" technique, because in this, after an HTTP connection has been established between Client & Server, the connection is "kept-alive", and the server only sends responses to the client, whenever there's a new update (or info) to share/inform to the client. The client sends literally zero '0' HTTP-Requests to the server for receiving any data/info, after the connection is established. Hence, that's why it's called Server-Sent Events.
The HTTP Calls used in this technique is also Unary, means Uni-directional (server-to-client only), but the connection is Statefull (server keeps the HTTP connection open with client for long-time, keeping a reference to the client to send a new update/info, instead of forgetting about it) unlike "Long Polling" which is Stateless.

* <b>Advantages:</b>
    1. Light Weight, 'cause the resources used by client is very less or minimal, due to not sending any HTTP requests to the server.
    2. Can also be used to connect with servers, which are behind Proxy(s) (but not better than "Long Polling")

* <b>Disadvantages:</b>
    1. Lacks Control, 'cause after the connection is established with server, client cannot send any HTTP requests to the server to perform any ops.

</details>


<details>
<summary><font size="4"><b>Web Sockets (WS)</b></font></summary>

It is a modern and most popular technique of implementing RTC, in which once the HTTP connection is established between Client and Server, then the connection is "kept-alive", and both the client and server can talk to each other at the same time, until the connection is closed by either of them (client/server).
The HTTP connection being used in this technique is Bi-directional (data flows in both the directions client-to-server, and vice-versa), and Full-Duplex (it's bi-directional, but the time of execution is simultaneous. For ex: client receiving a response from server, while sending msg to the client at the same time), unlike Long Polling and SSE which are Uni-directional and Half-duplex (flow is also bi-directional, but one-way at a time, i.e either from client-to-server, or vice-versa at a time).
Basically, Uni-directional can be imagined as "One-Way Lane" whose one end consists of client & other end consists of server, for clear understanding. Whereas, the Half-duplex and Full-duplex defines the timing, whether client & server can talk to each other at the  same time or in turns.

* <b>Advantages:</b>
    1. Low Latency/Real-time, 'cause connection is "kept-alive" and the protocol is optimized.
    2. Bi-directional,
    3. Full-Duplex,
    4. Highly scalable, especially with brokers (like Kafka, and Redis)

* <b>Disadvantages:</b>
    1. Cannot connect with server behind Proxy(s).
    
</details>


## Conclusion

Any Feedback (positive criticisms) would be really appreciated, especially if you find any mistakes in my explanation, which is according to how much and how well I've understood the concept from both the videos.

And, I truly hope that whatever I've written here as facts, are actually 100% absolutely the facts.

Thank you so much for spending time reading this. I hope that this repo or my explanation contributed even 1% to your Dev/Engineering Journey. And, if Yes, then you can inform me by giving a "⭐" to this repo, or you can just DM me via my [LinkedIn](https://linkedin.com/in/vinaytambey):
`Hey Vinay! I hope you're doing well. I visited your GitHub repository on RTC, and I found it helpful/interesting. So I just wanna say "Thank You" for it.`