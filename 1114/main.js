const apple = {
  records: [
    {
      id: "reciAULZu9tZewj2E",
      createdTime: "2021-07-11T03:05:48.000Z",
      fields: {
        內容關鍵字: "增加情報機關應研議資訊戰策略之要求",
        提案日期: "2020/5/15",
        提案名稱: "國家情報工作法第七條及第三十條之二條文修正草案",
      },
    },
    {
      id: "recFy9dRs3Rj6LyWQ",
      createdTime: "2021-07-11T03:05:48.000Z",
      fields: {
        內容關鍵字: "廢止不合時宜法令",
        提案日期: "2020/5/29",
        提案名稱: "廢止訓政結束程序法",
      },
    },
  ],
};

const { records: book } = apple;

console.log(book[0]);
