import { type ISiteMetadata } from "../types";
import { CategoryInclbookmarked, CategoryIncldead, CategorySpstate, SchemaMetadata } from "../schemas/NexusPHP.ts";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,

  version: 1,
  id: "okpt",
  name: "OKPT",
  description: "做你最好的新手村",
  timezoneOffset: "+0800",

  collaborator: ["sleepm"],

  type: "private",
  schema: "NexusPHP",

  urls: ["uggcf://jjj.bxcg.arg/"],

  category: [
    {
      name: "分类",
      key: "cat",
      options: [
        { name: "电视剧", value: 402 },
        { name: "电影", value: 401 },
        { name: "短剧", value: 440 },
        { name: "动漫/动画", value: 405 },
        { name: "纪录片", value: 404 },
        { name: "综艺/真人秀", value: 403 },
        { name: "电子书", value: 434 },
        { name: "有声书", value: 432 },
        { name: "漫画书", value: 436 },
        { name: "游戏", value: 413 },
        { name: "体育", value: 407 },
        { name: "软件", value: 431 },
        { name: "其他", value: 409 },
      ],
      cross: { mode: "append" },
    },
    {
      name: "媒介",
      key: "medium",
      options: [
        { name: "UHD Blu-ray", value: 11 },
        { name: "Blu-ray", value: 1 },
        { name: "Remux", value: 3 },
        { name: "Encode", value: 7 },
        { name: "WEB-DL", value: 10 },
        { name: "HDTV", value: 5 },
        { name: "DVD", value: 2 },
        { name: "SACD", value: 15 },
        { name: "CD", value: 8 },
        { name: "Vinyl", value: 17 },
        { name: "HDCD", value: 18 },
        { name: "HI-RES", value: 19 },
        { name: "WEB", value: 20 },
        { name: "Other", value: 16 },
      ],
      cross: { mode: "append" },
    },
    {
      name: "编码",
      key: "codec",
      options: [
        { name: "EPUB/AZW3/MOBI", value: 21 },
        { name: "AZW3/MOBI", value: 19 },
        { name: "PDF", value: 16 },
        { name: "EPUB", value: 17 },
        { name: "ZIP", value: 20 },
        { name: "TXT", value: 15 },
        { name: "HEVC/H.265/x265", value: 11 },
        { name: "AVC/H.264/x264", value: 2 },
        { name: "H.266/VVC", value: 10 },
        { name: "AV1", value: 7 },
        { name: "VP9", value: 12 },
        { name: "Other", value: 14 },
      ],
      cross: { mode: "append" },
    },
    {
      name: "音频编码",
      key: "audiocodec",
      options: [
        { name: "DTS:X", value: 22 },
        { name: "MPEG", value: 14 },
        { name: "MP3", value: 4 },
        { name: "APE", value: 5 },
        { name: "WAV", value: 20 },
        { name: "FLAC 分轨", value: 1 },
        { name: "DTS", value: 3 },
        { name: "LPCM", value: 16 },
        { name: "TrueHD", value: 19 },
        { name: "DTS-HD", value: 7 },
        { name: "AAC", value: 6 },
        { name: "DD/DD+", value: 15 },
        { name: "镜像(Mirror) 整轨", value: 23 },
        { name: "WAV 整轨", value: 24 },
        { name: "DSF 分轨", value: 25 },
        { name: "Other", value: 21 },
      ],
      cross: { mode: "append" },
    },
    {
      name: "分辨率",
      key: "standard",
      options: [
        { name: "8K", value: 1 },
        { name: "4K/2160p", value: 2 },
        { name: "1080p/1080i", value: 3 },
        { name: "720p", value: 4 },
        { name: "Other", value: 10 },
      ],
      cross: { mode: "append" },
    },
    {
      name: "制作组",
      key: "team",
      options: [
        { name: "ZmPT", value: 29 },
        { name: "Ying", value: 28 },
        { name: "U2", value: 32 },
        { name: "UBits", value: 27 },
        { name: "TTG", value: 26 },
        { name: "Rousi", value: 24 },
        { name: "PTHome", value: 22 },
        { name: "Red Leaves", value: 23 },
        { name: "PterClub", value: 21 },
        { name: "Panda", value: 5 },
        { name: "OurBits", value: 2 },
        { name: "OKPT", value: 3 },
        { name: "M-Team", value: 12 },
        { name: "LemonHD", value: 11 },
        { name: "HD4FANS", value: 1 },
        { name: "HDSky", value: 10 },
        { name: "HDHome", value: 6 },
        { name: "HDDollby", value: 9 },
        { name: "HDChina", value: 8 },
        { name: "HHClub", value: 4 },
        { name: "FRDS", value: 20 },
        { name: "DaJiao", value: 19 },
        { name: "CMCT", value: 16 },
        { name: "CHDBits", value: 17 },
        { name: "BTSchool", value: 18 },
        { name: "BeiTai", value: 31 },
        { name: "Audiences", value: 13 },
        { name: "Other", value: 14 },
      ],
      cross: { mode: "append" },
    },
    CategoryIncldead,
    CategorySpstate,
    CategoryInclbookmarked,
  ],

  levelRequirements: [
    {
      id: 0,
      name: " 健全人士(User)",
      privilege: "新用户的默认级别。可以购买邀请；可以发送邀请；可以上传字幕；可以发布种子至候选区。",
    },
    {
      id: 1,
      name: "一级烧伤(Power User)",
      interval: "P4W",
      downloaded: "50GB",
      ratio: 2.0,
      seedingBonus: 40000,
      privilege:
        '可以直接发布种子；可以查看NFO文档；可以请求续种；可以查看其它用户的种子历史(如果用户隐私等级未设置为"强")； 可以删除自己上传的字幕。拥有与user一样的权限。',
    },
    {
      id: 2,
      name: "二级烧伤(Elite User)",
      interval: "P8W",
      downloaded: "100GB",
      ratio: 2.5,
      seedingBonus: 80000,
      privilege: "拥有与PowerUseruser一样的权限。",
    },
    {
      id: 3,
      name: "三级烧伤(Crazy User)",
      interval: "P15W",
      downloaded: "300GB",
      ratio: 3.0,
      seedingBonus: 150000,
      privilege: "可以在做种/下载/发布的时候选择匿名模式。拥有与EliteUser一样的权限",
    },
    {
      id: 4,
      name: "四级烧伤(Insane User)",
      interval: "P25W",
      downloaded: "500GB",
      ratio: 3.5,
      seedingBonus: 250000,
      privilege: "可以查看普通日志。拥有与CrazyUser一样的权限",
    },
    {
      id: 5,
      name: "五级烧伤(Veteran User)",
      interval: "P40W",
      downloaded: "1TB",
      ratio: 4.0,
      seedingBonus: 400000,
      privilege: "可以查看其它用户的评论、帖子历史。拥有与InsaneUser一样的权限",
    },
    {
      id: 6,
      name: "六级烧伤(Extreme User)",
      interval: "P60W",
      downloaded: "2TB",
      ratio: 4.5,
      seedingBonus: 600000,
      privilege: "可以更新过期的外部信息。拥有与VeteranUser一样的权限六级烧伤(Extreme User)及以上用户会永远保留账号。",
    },
    {
      id: 7,
      name: "七级烧伤(Ultimate User)",
      interval: "P80W",
      downloaded: "5TB",
      ratio: 5.0,
      seedingBonus: 800000,
      privilege: "这个等级会永远保留账号。拥有与ExtremeUser一样的权限",
    },
    {
      id: 8,
      name: "终极烧伤(Nexus Master)",
      interval: "P100W",
      downloaded: "10TB",
      ratio: 5.5,
      seedingBonus: 1000000,
      privilege: "这个等级会永远保留账号。拥有与UltimateUser一样的权限",
    },
  ],
};
