export const FakeData = [
  {
    name: "Trồng cây 2 đầu đường",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 600,
    nav: '/chapter-2/part/1',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        scene: {
          object: 'tree',
          totalObj: 6,
          space: '4m',
          totalSpace: '?m'
        },
        problem: 'Con đường phía trước trường em có 6 cái cây. Mỗi cái cây cách nhau 4m. Hỏi cây thứ sáu cách cây thứ nhất bao nhiêu mét?',
        choices: ['15m', '20m', '25m', '30m'],
        answer: '20m'
      },
      {
        id: 2,
        type: 'input',
        scene: {
          object: 'match',
          totalObj: 5,
          space: '1 k/c',
          totalSpace: '? khoảng cách'
        },
        problem: '5 que diêm được xếp cách đều nhau. Hỏi có bao nhiêu khoảng cách được xếp giữa các que diêm đó?',
        answer: '4 khoảng cách'
      },
      {
        id: 3,
        type: 'multiple-choice',
        scene: {
          object: 'house',
          totalObj: 8,
          space: '?m',
          totalSpace: '21m'
        },
        problem: 'Trên một con đường, khoảng cách giữa ngôi nhà đầu tiên với ngôi nhà thứ tám là 21m. Hỏi khoảng cách giữa các ngôi nhà là bao nhiêu nếu các ngôi nhà được xây cách đều nhau?',
        choices: ['2m', '3m', '4m', '5m'],
        answer: '3m'
      },
      {
        id: 4,
        type: 'input',
        scene: {
          object: 'rock',
          totalObj: 20,
          space: '5cm',
          totalSpace: '100cm'
        },
        problem: 'Có một hàng các viên sỏi được xếp cách đều nhau 5cm. Biết khoảng cách từ viên đầu tiên đến viên cuối cùng là 100cm, hỏi có bao nhiêu viên sỏi ở trong hàng?',
        answer: '21 viên'
      },
      {
        id: 5,
        type: 'multiple-choice',
        scene: {
          object: 'bulb',
          totalObj: 15,
          space: '1m',
          totalSpace: '14m'
        },
        problem: 'Các bóng đèn được xếp thành 1 hàng cách đều nhau 1m. Khoảng cách từ bóng đầu tiên đến bóng cuối cùng là 14m. Nếu giá tiền mỗi bóng là 50000đ thì cần bao nhiêu tiền để lắp hết tất cả các bóng?',
        choices: ['750000đ', '760000đ', '700000đ', '800000đ'],
        answer: '750000đ'
      }
    ]
  },
  {
    name: "Trồng cây ở một đầu đường",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: '/chapter-2/part/2',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        scene: {
          object: 'tree',
          firstObj: null,
          lastObj: 'house',
          totalObj: 9,
          space: '4m',
          totalSpace: '?m'
        },
        problem: 'Dọc theo một con đường có 8 cái cây, cuối đường là một ngôi nhà. Hỏi cây đầu tiên cách ngôi nhà bao nhiêu mét, biết khoảng cách giữa ngôi nhà và cây bằng khoảng cách giữa các cây và bằng 4m.',
        choices: ['28m', '30m', '32m', '36m'],
        answer: '32m'
      },
      {
        id: 2,
        type: 'multiple-choice',
        scene: {
          object: 'house',
          firstObj: 'tree',
          lastObj: null,
          totalObj: 10,
          space: '8m',
          totalSpace: '?m'
        },
        problem: 'Dọc theo một con đường có 9 ngôi nhà cách đều nhau 8m, đầu đường là một cái cây. Hỏi con đường này dài bao nhiêu mét (tính từ cây đến nhà cuối cùng) ?',
        choices: ['64m', '70m', '72m', '74m'],
        answer: '72m'
      },
      {
        id: 3,
        type: 'input',
        scene: {
          object: 'house',
          firstObj: 'human',
          lastObj: null,
          totalObj: 5,
          space: '?m',
          totalSpace: '40m'
        },
        problem: 'Một người nhận thấy khoảng cách mình đứng cách ngôi nhà đầu tiên bằng với khoảng cách giữa các ngôi nhà với nhau. Người đó đo được khoảng cách từ mình đến ngôi nhà thứ 4 là 40m. Hỏi khoảng cách người đó đến ngôi nhà đầu tiên là bao nhiêu?',
        answer: '10m'
      },
      {
        id: 4,
        type: 'multiple-choice',
        scene: {
          object: 'match',
          firstObj: null,
          lastObj: 'blank',
          totalObj: 11,
          space: '3cm',
          totalSpace: '30cm'
        },
        problem: 'Một đoạn thẳng dài 30cm. Người ta xếp que diêm từ điểm đầu tiên, mỗi que diêm cách nhau 3cm. Hỏi có tất cả bao nhiêu que diêm trong đoạn thẳng biết điểm cuối cùng không được xếp que diêm nào.',
        choices: ['8', '9', '10', '11'],
        answer: '10'
      },
      {
        id: 5,
        type: 'input',
        scene: {
          object: 'tree',
          firstObj: null,
          lastObj: 'house',
          totalObj: 6,
          space: '?m',
          totalSpace: '40m'
        },
        problem: 'Có một hàng gồm 5 cây được trồng cách đều nhau, cuối hàng cây là một ngôi nhà. Khoảng cách từ cây đầu tiên đến ngôi nhà là 40m. Hỏi khoảng cách từ cây đầu tiên đến cây thứ 4 là bao nhiêu, biết khoảng cách từ cây cuối cùng đến ngôi nhà cũng bằng khoảng cách giữa các cây.',
        answer: '32m'
      }
    ]
  },
  {
    name: "Trồng cây giữa 2 tòa nhà",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: '/chapter-2/part/3',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        scene: {
          object: 'tree',
          firstObj: 'house',
          lastObj: 'house',
          totalObj: 10,
          space: '4m',
          totalSpace: '?m'
        },
        problem: 'Dọc theo một con đường có 8 cái cây, hai đầu đường là ngôi nhà. Hỏi hai ngôi nhà cách nhau bao nhiêu mét, biết khoảng cách giữa nhà và cây bằng khoảng cách giữa các cây và bằng 4m.',
        choices: ['28m', '30m', '32m', '36m'],
        answer: '36m'
      },
      {
        id: 2,
        type: 'multiple-choice',
        scene: {
          object: 'house',
          firstObj: 'tree',
          lastObj: 'tree',
          totalObj: 11,
          space: '8m',
          totalSpace: '?m'
        },
        problem: 'Dọc theo một con đường có 9 ngôi nhà cách đều nhau 8m, hai đầu đường là 2 cái cây. Hỏi con đường này dài bao nhiêu mét (tính từ cây này đến cây kia) ?',
        choices: ['96m', '88m', '72m', '80m'],
        answer: '80m'
      },
      {
        id: 3,
        type: 'input',
        scene: {
          object: 'house',
          firstObj: 'human',
          lastObj: 'human',
          totalObj: 6,
          space: '?m',
          totalSpace: '50m'
        },
        problem: 'Hai người nhận thấy khoảng cách mình đứng cách ngôi nhà gần nhất bằng với khoảng cách giữa các ngôi nhà với nhau. Khoảng cách giữa 2 người là 50m. Hỏi khoảng cách giữa các ngôi nhà là bao nhiêu?',
        answer: '10m'
      },
      {
        id: 4,
        type: 'multiple-choice',
        scene: {
          object: 'match',
          firstObj: 'blank',
          lastObj: 'blank',
          totalObj: 12,
          space: '3cm',
          totalSpace: '30cm'
        },
        problem: 'Một đoạn thẳng dài 30cm. Người ta xếp mỗi que diêm cách nhau 3cm. Hỏi có tất cả bao nhiêu que diêm trên đoạn thẳng biết điểm đầu tiên và cuối cùng không được xếp que diêm nào.',
        choices: ['8', '9', '10', '11'],
        answer: '9'
      },
      {
        id: 5,
        type: 'input',
        scene: {
          object: 'tree',
          firstObj: 'house',
          lastObj: 'house',
          totalObj: 7,
          space: '?m',
          totalSpace: '30m'
        },
        problem: 'Có một hàng gồm 5 cây được trồng cách đều nhau, 2 đầu hàng cây hàng cây là hai ngôi nhà. Khoảng cách giữa 2 ngôi nhà là 40m. Hỏi khoảng cách từ cây đầu tiên đến cây thứ 4 là bao nhiêu, biết khoảng cách từ cây đến ngôi nhà cũng bằng khoảng cách giữa các cây.',
        answer: '15m'
      },
    ]
  },
  {
    name: "Trồng cây quanh hồ",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: '/chapter-2/part/4',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        scene: {
          object: 'tree',
          widthObj: 5,
          heightObj: 5,
          width: "4m",
          height: "4m",
          space: "1m"
        },
        problem: 'Một cái hồ hình vuông cạnh 4m. Người ta trồng cây dọc theo bờ hồ, mỗi cây cách nhau 1m. Hỏi người ta sẽ trồng hết bao nhiêu cây.',
        choices: ['15', '14', '16', '18'],
        answer: '16'
      },
      {
        id: 2,
        type: 'multiple-choice',
        scene: {
          object: 'bulb',
          widthObj: 6,
          heightObj: 6,
          width: "10m",
          height: "10m",
          space: "2m"
        },
        problem: 'Một sân bóng vuông cạnh 10m. Hỏi để lắp đèn xung quanh sân thì cần bao nhiêu tiền, biết mỗi đèn cách nhau 2m và giá tiền mỗi đèn là 100000đ.',
        choices: ['1000000đ', '1200000đ', '2000000đ', '2200000đ'],
        answer: '2000000đ'
      },
      {
        id: 3,
        type: 'input',
        scene: {
          object: 'house',
          widthObj: 4,
          heightObj: 5,
          width: "30m",
          height: "40m",
          space: "?m",
        },
        problem: 'Một khu nhà hình chữ nhật có một khu vui chơi ở chính giữa. Khu vui chơi có kích thước 30m x 40m. Người ta tính được sẽ xây 14 ngôi nhà xung quanh khu vui chơi này.Hỏi mỗi ngôi nhà phải cách đều nhau bao nhiêu m?',
        answer: '10m'
      },
      {
        id: 4,
        type: 'multiple-choice',
        scene: {
          object: 'match',
          widthObj: 3,
          heightObj: 4,
          width: "?cm",
          height: "?cm",
          space: "3cm"
        },
        problem: 'Người ta xếp que diêm theo một hình chữ nhật, mỗi que diêm cách nhau 3cm. Hỏi chu vi hình chữ nhật là bao nhiêu biết người ta xếp được tất cả 10 que diêm.',
        choices: ['24cm', '27cm', '30cm', '33cm'],
        answer: '30cm'
      }
    ]
  },
];
