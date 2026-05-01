# Real-Time Communication (RTC) Servers Implementation

This repository consists of the basic source code of Long-Polling, Server-Sent Events (SSE),  and WebSocket servers, which are the three most-popular techniques/approaches for implementing real-time communication (RTC) feature in Web Applications.

A huge thanks to my mentors "[Ms. Shradha Khapra](https://github.com/shradha-khapra) && [Sr. Hitesh Choudhary](https://github.com/hiteshchoudhary)" for teaching me this valuable topic in Web-Dev via their free YT Videos: [Video1](), and [Video2](https://youtu.be/_CCyMWSZNU4?si=__w7972lOYGxwJF-), respectively, which are kinda "Crash Course" on RTC, but the quality is very good, as it teaches us about the fundamentals of RTC, advantages & disadvantages of each techniques, and their basic implementation.

The only reason I have created this repository is to store the source code of all three techniques in one place, so that I can easily refer to it whenever I need to implement RTC feature in my future projects.

## Explanation of Every Technique:

<details>
<summary><font size="4"><b>Long-Polling</b></font></summary>

It's a technique of implementing RTC in which the client will be sending HTTP-Requests to the Server asking for any updates, and if there any updates only then the Server will respond to the Client, or else the Server will not send any response to the client.
The term "polling" refers to "waiting" in this context, as the server doesn't immediately sends a response to the client, even if there's an update, rather it waits for a specific time-duration, before sending a response to the client.
The HTTP Calls (request-response cycles) used in this technique is *Unary*, means uni-directional (info is transmitted from one device to another at a time) and stateless (server doesn't stores any info about the client, as the complete info is contained in HTTP Calls' headers and body).

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


* <b>Advantages:</b>
    1.

* <b>Disadvantages:</b>
    1.
</details>

<details>
<summary><font size="4"><b>Web Sockets (WS)</b></font></summary>

* <b>Advantages:</b>
    1.

* <b>Disadvantages:</b>
    1.
</details>

## Conclusion

Any Feedback (positive criticisms) would be really appreciated, especially if you find any mistakes in my explanation, which is according to how much and how well I've understood the concept from both the videos.

And, I truly hope that whatever I've written here as facts, are actually 100% absolutely the facts.

Thank you so much for spending time reading this. I hope that this repo or my explanation contributed even 1% to your Dev/Engineering Journey. And, if Yes, then you can inform me by giving a "⭐" to this repo, or you can just DM me via my [LinkedIn](https://linkedin.com/in/vinaytambey):
`Hey Vinay! I hope you're doing well. I visited your GitHub repository on RTC, and I found it helpful/interesting. So I just wanna say "Thank You" for it.`