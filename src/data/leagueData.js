import fetch from "node-fetch";
export const getCd = (baseCooldown, abilityHaste) => {
  //returns the cool down of a spell after applying ability haste
  return baseCooldown * (100 / (100 + abilityHaste)).toFixed(1).toString();
};

const getPatch = async () => {
  const patchData = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  ).then((response) => response.json());
  return patchData[0];
};
export const getChampData = async (champ) => {
  //returns an object with all information about a champion
  const patchNo = await getPatch();
  const champData = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${patchNo}/data/en_US/champion/${champ}.json`
  ).then((response) => response.json());

  const name = champData["data"][champ]["name"];
  const title = champData["data"][champ]["title"];
  const lore = champData["data"][champ]["lore"];
  const stats = champData["data"][champ]["info"];
  const counterTip = champData["data"][champ]["enemytips"];

  const pname = champData["data"][champ]["passive"]["name"];
  const pImageName = champData["data"][champ]["passive"]["image"]["full"];
  const passiveImageUrl = `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/passive/${pImageName}`;
  const qname = champData["data"][champ]["spells"][0]["name"];
  const qDescription = champData["data"][champ]["spells"][0]["description"];
  const qCooldown = champData["data"][champ]["spells"][0]["cooldown"];
  const qCost = champData["data"][champ]["spells"][0]["cost"];
  const qImageName = champData["data"][champ]["spells"][0]["image"]["full"];
  const qImageUrl = `http://ddragon.leagueoflegends.com/cdn/${patchNo}/img/spell/${qImageName}`;

  const wname = champData["data"][champ]["spells"][1]["name"];
  const wDescription = champData["data"][champ]["spells"][1]["description"];
  const wCooldown = champData["data"][champ]["spells"][1]["cooldown"];
  const wCost = champData["data"][champ]["spells"][1]["cost"];
  const wImageName = champData["data"][champ]["spells"][1]["image"]["full"];
  const wImageUrl = `http://ddragon.leagueoflegends.com/cdn/${patchNo}/img/spell/${wImageName}`;

  const ename = champData["data"][champ]["spells"][2]["name"];
  const eDescription = champData["data"][champ]["spells"][2]["description"];
  const eCooldown = champData["data"][champ]["spells"][2]["cooldown"];
  const eCost = champData["data"][champ]["spells"][2]["cost"];
  const eImageName = champData["data"][champ]["spells"][2]["image"]["full"];
  const eImageUrl = `http://ddragon.leagueoflegends.com/cdn/${patchNo}/img/spell/${eImageName}`;

  const rname = champData["data"][champ]["spells"][3]["name"];
  const rDescription = champData["data"][champ]["spells"][3]["description"];
  const rCooldown = champData["data"][champ]["spells"][3]["cooldown"];
  const rCost = champData["data"][champ]["spells"][3]["cost"];
  const rImageName = champData["data"][champ]["spells"][3]["image"]["full"];
  const rImageUrl = `http://ddragon.leagueoflegends.com/cdn/${patchNo}/img/spell/${rImageName}`;

  const splashImage = getSplashImage(champ);
  const squareImage = getSquareImage(champ);
  const data = {
    name: name,
    title: title,
    lore: lore,
    counterTips: counterTip,
    splashImage: splashImage,
    squareImage: squareImage,
    passiveName: pname,
    passiveImageUrl: passiveImageUrl,
    stats: stats,
    qname: qname,
    qDescription: qDescription,
    qCooldown: qCooldown,
    qCost: qCost,
    qImageUrl: qImageUrl,
    wname: wname,
    wDescription: wDescription,
    wCooldown: wCooldown,
    wCost: wCost,
    wImageUrl: wImageUrl,
    ename: ename,
    eDescription: eDescription,
    eCooldown: eCooldown,
    eCost: eCost,
    eImageUrl: eImageUrl,
    rname: rname,
    rDescription: rDescription,
    rCooldown: rCooldown,
    rCost: rCost,
    rImageUrl: rImageUrl,
  };
  return data;
};

export const getChampList = async () => {
  //get names of all the champions
  const champD = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json`
  ).then((response) => response.json());
  const champList = Object.keys(champD["data"]);
  return champList;
};
export const getSplashImage = (champ) => {
  const imageName = champ + "_0.jpg";
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${imageName}`;
  return imageUrl;
};
export const getSquareImage = (champ) => {
  const imageName = champ + ".png";
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${imageName}`;
  return imageUrl;
};
export const getChampImages = async () => {
  //returns image url of all champs as object grouped alphabetically
  const champList = await getChampList();
  let champImageData = {};
  for (let i = 97; i < 123; i++) {
    champImageData[String.fromCharCode(i)] = [];
  }
  champList.forEach((champ) => {
    const obj = {};
    obj[champ] = getSquareImage(champ);
    champImageData[champ[0].toLocaleLowerCase()].push(obj);
  });
  return champImageData;
};
