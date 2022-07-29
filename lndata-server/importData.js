const express = require("express");
const router = express.Router();
const pool = require("./db.js");
const importData = require("./players.json");
// console.log(importData);
const fs = require("fs");
// const fs = require("fs/promises");

// router.get("/", async (req, res) => {
//   // 讀檔案 => callback 呼叫函式
//   let playerDatas = await fs.readFile("./players.json", "utf-8");
//   res.json({ data: playerDatas });
// });

router.get(`/`, async (req, res) => {
  let playerDatas = require('./players.json');
  console.log(playerDatas);
  console.log("playerDatas1", playerDatas[0]);
  console.log(playerDatas.length);
  for(i = 0; i < playerDatas.length; i++){
    let [result] = await pool.execute("INSERT INTO `players`( `name`, `team_acronym`, `team_name`, `games_played`, `minutes_per_game`, `field_goals_attempted_per_game`, `field_goals_made_per_game`, `field_goal_percentage`, `free_throw_percentage`, `three_point_attempted_per_game`, `three_point_made_per_game`, `three_point_percentage`, `points_per_game`, `offensive_rebounds_per_game`, `defensive_rebounds_per_game`, `rebounds_per_game`, `assists_per_game`, `steals_per_game`, `blocks_per_game`, `turnovers_per_game`, `player_efficiency_rating`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[
      playerDatas[i].name,
      playerDatas[i].team_acronym,
      playerDatas[i].team_name,
      playerDatas[i].games_played,
      playerDatas[i].minutes_per_game,
      playerDatas[i].field_goals_attempted_per_game,
      playerDatas[i].field_goals_made_per_game,
      playerDatas[i].field_goal_percentage,
      playerDatas[i].free_throw_percentage,
      playerDatas[i].three_point_attempted_per_game,
      playerDatas[i].three_point_made_per_game,
      playerDatas[i].three_point_percentage,
      playerDatas[i].points_per_game,
      playerDatas[i].offensive_rebounds_per_game,
      playerDatas[i].defensive_rebounds_per_game,
      playerDatas[i].rebounds_per_game,
      playerDatas[i].assists_per_game,
      playerDatas[i].steals_per_game,
      playerDatas[i].blocks_per_game,
      playerDatas[i].turnovers_per_game,
      playerDatas[i].player_efficiency_rating,
    ]);
  }

  res.json({ code: 0, result: "ok",playerDatas });
});

module.exports = router;
