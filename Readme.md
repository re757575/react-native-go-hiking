# Setup
### 資料格式
放在 `app/json/data.json`
```
[{
  "id": 1,
  "title": "蘇花古道：大南澳越嶺段",
  "detail_01": "國家級步道",
  "detail_02": "全程4.1公里",
  "detail_03": "海拔 100-650 公尺",
  "detail_04": "土徑步道、土木階梯",
  "description_01": "使用步道12條責任:1.衡量體力，瞭解步行時程。2.遵循步道指示方向，勿抄捷徑。3.自然步道屬生態區不設公廁，行前請先行方便。4.自然生態區，若需處理生理問題，請遠離水源，事後覆土，回歸土壤養分。5.自然步道不設垃圾桶，垃圾物品請自行攜回，避免野生動物誤食及污穢環境。6.勿攜帶寵物及放生，避免病菌感染，干擾影生動物棲息及影響他人遊憩品質。7.勿挖掘植物及攀折花木，讓大家共享自然生態。8.勿獵捕野生動物及魚類，因為它是自然界的原住民，尊重他們的生命。9.勿進入瀑布及溪流，避免汙染水源及自身安全。10.勿露營、野炊、烤肉，任何野外引火行為都可能導致森林火災。11.勿在解說牌、樹幹、岩石、設施上刻畫書寫，而影響視覺美感。12.勿移動或破壞休憩設施，讓資源永在，分享無限。",
  "description_02": "蘇花古道建造於清朝同治13 年（1874 年），是聯絡蘇澳與花蓮之間最早的一條官道；日人19 世紀於蘇花海岸之間先後開鑿了北段的大南澳路、南段的沿岸理番道路及東海徒步道，即今日蘇花公路的前身，但早已荒廢舊跡難尋。經過調查後整建「蘇花古道-- 大南澳越嶺段」。古道呈南北縱向，地勢北高南低，因此由北往南走，多為下坡路，路程較輕鬆，若由南往北走，則海拔落差幾達七百公尺，來回行走約5 小時，路程頗具挑戰性。",
  "status": "全線封閉",
  "recommend": "遠眺海岸景觀",
  "level": 2,
  "place": "宜蘭縣南澳鄉",
  "lat": 24.436756,
  "lon": 121.688164,
  "map": "http://recreation.forest.gov.tw/RT/Photo/001/01/001EP_Map.jpg",
  "url": "http://recreation.forest.gov.tw/RT/RT_2_1.aspx?TR_ID=001"
}]
```
### install package
```
npm install -g npm # if your npm version < 3
npm install -g rnpm
npm install
```
# Start
```
npm start
```

#### Run ios
```
react-native run-ios
```

#### Run android
```
npm run bundle-android
npm run android-mock-update-server
react-native run-android
```
# Bundle
```
npm run bundle-ios
npm run bundle-android
```
