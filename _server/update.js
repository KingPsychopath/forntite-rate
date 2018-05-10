/*
    Update
*/

const download = require('image-downloader')
var fs = require("fs");

var data = '[{"rarity":"legendary","price":"??","image":"https://image.fnbr.co/outfit/5ab1593ae9847b3170da0332/icon.png","name":"Rose Team Leader","type":"outfit"},{"rarity":"legendary","price":"??","image":"https://image.fnbr.co/outfit/5ab15a31e9847b3170da0337/icon.png","name":"Warpaint","type":"outfit"},{"rarity":"epic","price":"??","image":"https://image.fnbr.co/outfit/5ae89e63f3d31b728ac5b7fd/icon.png","name":"Abstrakt","type":"outfit"},{"rarity":"epic","price":"??","image":"https://image.fnbr.co/outfit/5ae89ec5f3d31b2467c5b7fe/icon.png","name":"Royale Bomber","type":"outfit"},{"rarity":"rare","price":"??","image":"https://image.fnbr.co/outfit/5ae89e21f3d31b7f12c5b7fb/icon.png","name":"Chromium","type":"outfit"},{"rarity":"rare","price":"??","image":"https://image.fnbr.co/outfit/5ae89e50f3d31b7d66c5b7fc/icon.png","name":"Diecast","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab155f4e9847b3170da0321/icon.png","name":"Battle Hound","type":"outfit"},{"rarity":"legendary","price":"TIER 70 (S2)","image":"https://image.fnbr.co/outfit/5ab1562ce9847b3170da0322/icon.png","name":"Black Knight","type":"outfit"},{"rarity":"legendary","price":"TIER 1 (S4)","image":"https://image.fnbr.co/outfit/5ae8932d96f70486a7e909ad/icon.png","name":"Carbide","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab156b3e9847b3170da0324/icon.png","name":"Crackshot","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab15721e9847b3170da0326/icon.png","name":"Cuddle Team Leader","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5abcf2af9542fb9743da12a8/icon.png","name":"Dark Vanguard","type":"outfit"},{"rarity":"legendary","price":"TIER 70 (S3)","image":"https://image.fnbr.co/outfit/5ab155400585dc38d8138e51/icon.png","name":"Dark Voyager","type":"outfit"},{"rarity":"legendary","price":"TWITCH PRIME","image":"https://image.fnbr.co/outfit/5ab1577ee9847b3170da0328/icon.png","name":"Havoc","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ace24041f0d4d615bd42def/icon.png","name":"Leviathan","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab157aee9847b3170da0329/icon.png","name":"Love Ranger","type":"outfit"},{"rarity":"legendary","price":"TIER 100 (S4)","image":"https://image.fnbr.co/outfit/5ae8940e96f704fecbe909bb/icon.png","name":"Omega","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab1581fe9847b3170da032b/icon.png","name":"Power Chord","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab15860e9847b3170da032d/icon.png","name":"Raptor","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5abcf2279542fb06a6da12a5/icon.png","name":"Raven","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab158a8e9847b3170da032f/icon.png","name":"Red Knight","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab15960e9847b3170da0333/icon.png","name":"Rex","type":"outfit"},{"rarity":"legendary","price":"??","image":"https://image.fnbr.co/outfit/5ab1593ae9847b3170da0332/icon.png","name":"Rose Team Leader","type":"outfit"},{"rarity":"legendary","price":"TIER 100 (S3)","image":"https://image.fnbr.co/outfit/5ab158dfe9847b3170da0331/icon.png","name":"The Reaper","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ace241b1f0d4d5d0bd42df0/icon.png","name":"Tricera Ops","type":"outfit"},{"rarity":"legendary","price":"TIER 71 (S4)","image":"https://image.fnbr.co/outfit/5ae893d496f7045898e909b6/icon.png","name":"Valor","type":"outfit"},{"rarity":"legendary","price":"??","image":"https://image.fnbr.co/outfit/5ab15a31e9847b3170da0337/icon.png","name":"Warpaint","type":"outfit"},{"rarity":"legendary","price":"2000","image":"https://image.fnbr.co/outfit/5ab15a61e9847b3170da0338/icon.png","name":"Wukong","type":"outfit"},{"rarity":"epic","price":"??","image":"https://image.fnbr.co/outfit/5ae89e63f3d31b728ac5b7fd/icon.png","name":"Abstrakt","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1622429d7343ec4aa8267/icon.png","name":"Alpine Ace","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1626229d7343ec4aa8268/icon.png","name":"Alpine Ace (CAN)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab162fbc3a23b438035947b/icon.png","name":"Alpine Ace (CHN)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16320c3a23b438035947c/icon.png","name":"Alpine Ace (FRA)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1633ec3a23b438035947d/icon.png","name":"Alpine Ace (GBR)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1635bc3a23b438035947e/icon.png","name":"Alpine Ace (GER)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1637cc3a23b438035947f/icon.png","name":"Alpine Ace (KOR)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab163bcc3a23b4380359480/icon.png","name":"Alpine Ace (USA)","type":"outfit"},{"rarity":"epic","price":"TIER 1 (S4)","image":"https://image.fnbr.co/outfit/5ae8935596f704f42ae909af/icon.png","name":"Battlehawk","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5adf0a185e41b39a36a5de57/icon.png","name":"Brite Gunner","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5abcf2a39542fb551fda12a7/icon.png","name":"Bunny Brawler","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab1654ac3a23b4380359486/icon.png","name":"Burnout","type":"outfit"},{"rarity":"epic","price":"TIER 87 (S3)","image":"https://image.fnbr.co/outfit/5ab16ae85f957f27504aa4df/icon.png","name":"Elite Agent","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16ba45f957f27504aa4e2/icon.png","name":"Funk Ops","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16c0e5f957f27504aa4e4/icon.png","name":"Ghoul Trooper","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16c395f957f27504aa4e5/icon.png","name":"Ginger Gunner","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16c535f957f27504aa4e6/icon.png","name":"Highland Warrior","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16ce85f957f27504aa4e8/icon.png","name":"Merry Marauder","type":"outfit"},{"rarity":"epic","price":"TIER 1 (S3)","image":"https://image.fnbr.co/outfit/5ab16d475f957f27504aa4e9/icon.png","name":"Mission Specialist","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16d885f957f27504aa4ea/icon.png","name":"Mogul Master","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16dc65f957f27504aa4eb/icon.png","name":"Mogul Master (CAN)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16def5f957f27504aa4ec/icon.png","name":"Mogul Master (CHN)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16e115f957f27504aa4ed/icon.png","name":"Mogul Master (FRA)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16e435f957f27504aa4ee/icon.png","name":"Mogul Master (GBR)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16e815f957f27504aa4ef/icon.png","name":"Mogul Master (GER)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16eb05f957f27504aa4f0/icon.png","name":"Mogul Master (KOR)","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab16ee85f957f27504aa4f1/icon.png","name":"Mogul Master (USA)","type":"outfit"},{"rarity":"epic","price":"TIER 55 (S3)","image":"https://image.fnbr.co/outfit/5ab170f75f957f27504aa4fa/icon.png","name":"Moonwalker","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5abcf2949542fb0f72da12a6/icon.png","name":"Rabbit Raider","type":"outfit"},{"rarity":"epic","price":"STARTER PACK","image":"https://image.fnbr.co/outfit/5ab171bc5f957f27504aa500/icon.png","name":"Rogue Agent","type":"outfit"},{"rarity":"epic","price":"??","image":"https://image.fnbr.co/outfit/5ae89ec5f3d31b2467c5b7fe/icon.png","name":"Royale Bomber","type":"outfit"},{"rarity":"epic","price":"TIER 23 (S3)","image":"https://image.fnbr.co/outfit/5ab179f65f957f27504aa528/icon.png","name":"Rust Lord","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ab172645f957f27504aa503/icon.png","name":"Shadow Ops","type":"outfit"},{"rarity":"epic","price":"1200","image":"https://image.fnbr.co/outfit/5ab172825f957f27504aa504/icon.png","name":"Skull Trooper","type":"outfit"},{"rarity":"epic","price":"TIER 56 (S2)","image":"https://image.fnbr.co/outfit/5ab172e45f957f27504aa506/icon.png","name":"Sparkle Specialist","type":"outfit"},{"rarity":"epic","price":"TIER 87 (S4)","image":"https://image.fnbr.co/outfit/5ae893f296f7043ee0e909b8/icon.png","name":"Squad Leader","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5adf0a025e41b38fe4a5de56/icon.png","name":"Steelsight","type":"outfit"},{"rarity":"epic","price":"TWITCH PRIME","image":"https://image.fnbr.co/outfit/5ab173545f957f27504aa507/icon.png","name":"Sub Commander","type":"outfit"},{"rarity":"epic","price":"TIER 23 (S4)","image":"https://image.fnbr.co/outfit/5ae893a596f704d0a7e909b2/icon.png","name":"Teknique","type":"outfit"},{"rarity":"epic","price":"1500","image":"https://image.fnbr.co/outfit/5ace24291f0d4d1d0bd42df1/icon.png","name":"Tomatohead","type":"outfit"},{"rarity":"epic","price":"TWITCH PRIME","image":"https://image.fnbr.co/outfit/5ae89edff3d31b9c3ec5b7ff/icon.png","name":"Trailblazer","type":"outfit"},{"rarity":"epic","price":"TIER 47 (S4)","image":"https://image.fnbr.co/outfit/5ae893be96f704c826e909b4/icon.png","name":"Zoey","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab1742d5f957f27504aa50b/icon.png","name":"Absolute Zero","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab1744d5f957f27504aa50c/icon.png","name":"Aerial Assault Trooper","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab174815f957f27504aa50e/icon.png","name":"Arctic Assassin","type":"outfit"},{"rarity":"rare","price":"TIER 1 (S2)","image":"https://image.fnbr.co/outfit/5ab175175f957f27504aa512/icon.png","name":"Blue Squire","type":"outfit"},{"rarity":"rare","price":"PS PLUS","image":"https://image.fnbr.co/outfit/5ab175775f957f27504aa514/icon.png","name":"Blue Team Leader","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab175935f957f27504aa515/icon.png","name":"Brawler","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab175b95f957f27504aa516/icon.png","name":"Brilliant Striker","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab175f75f957f27504aa518/icon.png","name":"Brite Bomber","type":"outfit"},{"rarity":"rare","price":"??","image":"https://image.fnbr.co/outfit/5ae89e21f3d31b7f12c5b7fb/icon.png","name":"Chromium","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ace24371f0d4d067dd42df2/icon.png","name":"Cipher","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab176445f957f27504aa51a/icon.png","name":"Circuit Breaker","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab177535f957f27504aa51d/icon.png","name":"Codename E.L.F.","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab178115f957f27504aa521/icon.png","name":"Dazzle","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab178345f957f27504aa522/icon.png","name":"Desperado","type":"outfit"},{"rarity":"rare","price":"??","image":"https://image.fnbr.co/outfit/5ae89e50f3d31b7d66c5b7fc/icon.png","name":"Diecast","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab179145f957f27504aa525/icon.png","name":"First strike Specialist","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17b735f957f27504aa52c/icon.png","name":"Hyperion","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab2dd2a8b5e144386db6cae/icon.png","name":"Infiltrator","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5abcf2199542fb574bda12a4/icon.png","name":"Midnight Ops","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17bd45f957f27504aa52f/icon.png","name":"Munitions Expert","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17cbb5f957f27504aa536/icon.png","name":"Radiant Striker","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17d0f5f957f27504aa539/icon.png","name":"Recon Expert","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17d335f957f27504aa53a/icon.png","name":"Recon Scout","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17d555f957f27504aa53b/icon.png","name":"Recon Specialist","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17d6f5f957f27504aa53c/icon.png","name":"Red-Nosed Raider","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17d925f957f27504aa53d/icon.png","name":"Renegade Raider","type":"outfit"},{"rarity":"rare","price":"TIER 21 (S2)","image":"https://image.fnbr.co/outfit/5ab17dd35f957f27504aa53f/icon.png","name":"Royale Knight","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17dfe5f957f27504aa541/icon.png","name":"Sash Sergeant","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17e705f957f27504aa545/icon.png","name":"Snorkel Ops","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17e915f957f27504aa546/icon.png","name":"Special Forces","type":"outfit"},{"rarity":"rare","price":"1200","image":"https://image.fnbr.co/outfit/5ab17f395f957f27504aa54c/icon.png","name":"Survival Specialist","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b62b9116ac5688c6d7c6/icon.png","name":"Assault Trooper","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b7169116ac5688c6d7cc/icon.png","name":"Commando","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b73e9116ac5688c6d7cd/icon.png","name":"Crimson Scout","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b7629116ac5688c6d7ce/icon.png","name":"Devastator","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b77c9116ac5688c6d7cf/icon.png","name":"Dominator","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b8e39116ac5688c6d7d5/icon.png","name":"Highrise Assault Trooper","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1b9589116ac5688c6d7da/icon.png","name":"Jungle Scout","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ae89dccf3d31b2a97c5b7f8/icon.png","name":"Liteshow","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ae89de0f3d31bc15ac5b7f9/icon.png","name":"Nitelite","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1ba119116ac5688c6d7df/icon.png","name":"Nog Ops","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1ba289116ac5688c6d7e0/icon.png","name":"Pathfinder","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1ba639116ac5688c6d7e2/icon.png","name":"Ranger","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bab99116ac5688c6d7e5/icon.png","name":"Renegade","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bb479116ac5688c6d7e9/icon.png","name":"Scarlet Defender","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bb609116ac5688c6d7ea/icon.png","name":"Scout","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bb7e9116ac5688c6d7eb/icon.png","name":"Sgt. Green Clover","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bc7d9116ac5688c6d7f4/icon.png","name":"Tactics Officer","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bcd09116ac5688c6d7f5/icon.png","name":"Tower Recon Specialist","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bcea9116ac5688c6d7f6/icon.png","name":"Tracker","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab1bd019116ac5688c6d7f7/icon.png","name":"Trooper","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5abcf2bf9542fb144ada12a9/icon.png","name":"Whiplash","type":"outfit"},{"rarity":"uncommon","price":"800","image":"https://image.fnbr.co/outfit/5ab15ca40499b850d8511de5/icon.png","name":"Yuletide Ranger","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15c3e0499b850d8511de4/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e00a8956031d0159a1e/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e14a8956031d0159a1f/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e26a8956031d0159a20/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e36a8956031d0159a21/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e44a8956031d0159a22/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e51a8956031d0159a23/icon.png","name":"Recruit","type":"outfit"},{"rarity":"common","price":"DEFAULT","image":"https://image.fnbr.co/outfit/5ab15e5da8956031d0159a24/icon.png","name":"Recruit","type":"outfit"}]';

data = JSON.parse(data);

downloadImages();

function downloadImages() {
    var skins = new Array();
    for (let i = 0; i < data.length; i++) {
        var options = {
            url: data[i].image,
            dest: 'images/' + data[i].name.split(" ").join("_").toUpperCase() + ".png" // Save to /path/to/dest/image.jpg
        }
        skins.push({
            name: data[i].name,
            type: data[i].type,
            src: "img/" + data[i].name.split(" ").join("_").toUpperCase() + ".png",
            rarity: data[i].rarity,
            price: data[i].price
        })
        download.image(options)
            .then(({
                filename,
                image
            }) => {
                console.log('File saved to', filename)
            }).catch((err) => {
                console.log("Failed: " + data[i].image);
            })
    }
    fs.writeFile("skins.txt", JSON.stringify(skins))
}