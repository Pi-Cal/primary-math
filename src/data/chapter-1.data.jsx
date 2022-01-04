import ChapterTest from "../pages/chapter-test";

export const FakeData = [
  {
    name: "Nhận biết",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 600,
    nav: '/chapter-1/nhanbiet',
    question: [
      {
        type: 'single-choice',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        answer: ['9:30','9:34','9:40','9:45'],
        correctAnswer: '9:40'
      },
      {
        type: 'input',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        correctAnswer: '10:15'
      },
      {
        type: 'rotate',
        request: 'Xoay các kim để đồng hồ chỉ 11 giờ 14 phút',
        correctAnswer: '11:14'
      },
      {
        type: 'single-choice',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        answer: ['22:30','19:36','8:40','7:42'],
        correctAnswer: '22:30'
      },
      {
        type: 'input',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        correctAnswer: '7:15'
      },
      {
        type: 'rotate',
        request: 'Xoay các kim để đồng hồ chỉ 22 giờ 59 phút',
        correctAnswer: '10:59'
      },
      {
        type: 'single-choice',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        answer: ['15:30','15:35','15:40','15:45'],
        correctAnswer: '15:35'
      },
      {
        type: 'input',
        request: 'Đồng hồ bên đang chỉ mấy giờ ?',
        correctAnswer: '6:15'
      },
      {
        type: 'rotate',
        request: 'Xoay các kim để đồng hồ chỉ 13 giờ 20 phút',
        correctAnswer: '1:20'
      }
    ]
  },
  {
    name: "Thêm bớt giờ",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: '/chapter-1/thembotgio',
  }
];
