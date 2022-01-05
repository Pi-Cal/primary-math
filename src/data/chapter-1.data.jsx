export const FakeData = [
  {
    name: "Nhận biết",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 600,
    nav: "/chapter-1/nhanbiet",
    question: [
      {
        type: "single-choice",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        answer: ["9:30", "9:34", "9:40", "9:45"],
        correctAnswer: "9:40",
      },
      {
        type: "input",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        correctAnswer: "10:15",
      },
      {
        type: "rotate",
        request: "Xoay các kim để đồng hồ chỉ 11 giờ 14 phút",
        correctAnswer: "11:14",
      },
      {
        type: "single-choice",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        answer: ["22:30", "19:36", "8:40", "7:42"],
        correctAnswer: "22:30",
      },
      {
        type: "input",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        correctAnswer: "7:15",
      },
      {
        type: "rotate",
        request: "Xoay các kim để đồng hồ chỉ 22 giờ 59 phút",
        correctAnswer: "10:59",
      },
      {
        type: "single-choice",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        answer: ["15:30", "15:35", "15:40", "15:45"],
        correctAnswer: "15:35",
      },
      {
        type: "input",
        request: "Đồng hồ bên đang chỉ mấy giờ ?",
        correctAnswer: "6:15",
      },
      {
        type: "rotate",
        request: "Xoay các kim để đồng hồ chỉ 13 giờ 20 phút",
        correctAnswer: "1:20",
      },
    ],
  },
  {
    name: "Thêm bớt giờ",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: "/chapter-1/thembotgio",
    question: [
      {
        type: "single-choice",
        request:
          "Bạn Quân đi học lúc 6 giờ đến trường lúc 7 giờ 30 phút. Hỏi bạn Quân đi học trong bao lâu ?",
        answer: ["1:30", "1:34", "2:40", "2:45"],
        correctAnswer: "1:30",
        startTime: '6:00',
        endTime:'7:30'
      },
      {
        type: "rotate-start",
        request:
          "Chuyến tàu đến ga cuối vào lúc 7 giờ 30 phút. Hỏi tàu khởi hành vào lúc mấy giờ? Biết tàu đã đi hết 1 giờ 30 phút",
        correctAnswer: "6:00",
        startTime: '',
        endTime:'7:30'
      },

      {
        type: "rotate-end",
        request:
          "Bộ phim hoạt hình bắt đầu chiếu trên VTV2 lúc 7 giờ và phát sóng trong 40 phút. Hỏi bộ phim sẽ kết thúc vào lúc mấy giờ ?",
        correctAnswer: "7:40",
        startTime: '7:00',
        endTime: ''
      },
      {
        type: "single-choice",
        request:
          "Chuyến bay từ Hà Nội vào Sài Gòn khởi hành lúc 9 giờ 15 phút và đến Sài Gòn lúc 12 giờ trưa. Hỏi chuyến bay kéo dài bao lâu ?",
        answer: ["3:00", "2:00", "2:45", "2:30"],
        correctAnswer: "2:45",
        startTime: '9:15',
        endTime:'12:00'
      },
      {
        type: "rotate-start",
        request:
          "Chuyến tàu đến ga cuối vào lúc 8 giờ 45 phút. Hỏi tàu khởi hành vào lúc mấy giờ? Biết tàu đã đi hết 1 giờ 30 phút",
        correctAnswer: "7:15",
        startTime: '',
        endTime:'8:45'
      },
      {
        type: "rotate-start",
        request:
          "Chuyến tàu khởi hành từ Hà Nội về Vinh vào lúc 9 giờ 45 phút. Hỏi tàu khởi hành vào lúc mấy giờ? Biết tàu đã đi hết 3 giờ 30 phút",
        correctAnswer: "6:15",
        startTime: '',
        endTime:'9:45'
      },
      {
        type: "single-choice",
        request:
          "Chuyến bay từ Hà Nội vào Cần Thơ khởi hành lúc 13 giờ 15 phút và đến nơi lúc 3 giờ chiều. Hỏi chuyến bay kéo dài bao lâu ?",
        answer: ["2:45", "2:00", "3:45", "1:45"],
        correctAnswer: "1:45",
        startTime: '1:15',
        endTime:'3:00'
      },
      {
        type: "input",
        request:
          "Hôm nay trời nóng nên Nam quyết định đi bơi. Nam đi từ nhà lúc 3 giờ chiều và đến nơi lúc 16 giờ 30 phút. Hỏi đi học trong bao lâu",
        correctAnswer: "1:30",
        startTime: '3:00',
        endTime:'4:30'
      },
      {
        type: "single-choice",
        request: "Thời gian để kim phút chạy được 2 vòng là bao nhiêu giờ ?",
        answer: ["1:10", "1:34", "1:40", "2:00"],
        correctAnswer: "2:00",
      },
      {
        type: "rotate-end",
        request:
          "Xe khách đi từ tỉnh Nghệ An đến Đồng Nai, khởi hành lúc 8 giờ 30 phút và đi trong 2 giờ 30 phút. Hỏi xe khách đến nơi lúc mấy giờ ?",
        correctAnswer: "11:00",
        startTime: '8:30',
        endTime:''
      },
      {
        type: "rotate-start",
        request:
          "Bộ phim kết thúc vào lúc 10 giờ 45 phút và đã phát sóng trong 2 giờ 30 phút. Hỏi bộ phim được phát sóng vào lúc mấy giờ ?",
        correctAnswer: "8:15",
        startTime: '',
        endTime:'10:45'
      },
      {
        type: "input",
        request:
          "Lan đi từ nhà lúc 3 giờ chiều, đến siêu thị lúc 16 giờ 30 phút và mua sắm trong 45 phút trước khi trở về nhà. Hỏi Lan về đến nhà lúc mấy giờ biết thời gian Lan đi từ nhà đến siêu thị bằng thời gian Lan đi từ siêu thị về nhà ?",
        correctAnswer: "6:45",
        startTime: '3:00',
        endTime:''
      },
      {
        type: "single-choice",
        request:
          "Xe khách đi từ Hà Nội đến Nam Định, khởi hành lúc 6 giờ 15 phút, đến nơi sau 3 tiếng đồng hồ.Sau khi nghỉ ngơi ở Nam Định 30 phút, xe lại trở về Hà Nội. Hỏi xe khách đến Hà Nội lúc mấy giờ biết thời gian xe khách đi từ Hà Nội đến Nam Định bằng thời gian xe đi từ Nam Định về Hà Nội ?",
        answer: ["12:45", "14:00", "13:45", "11:45"],
        correctAnswer: "12:45",
        startTime: '6:15',
        endTime:'9:45'
      },
      {
        type: "input",
        request:
          "Bộ phim truyền hình phát sóng trên TV vào lúc 7 giờ với thời gian phát sóng là 2 giờ 30 phút. Lan muốn xem bộ phim đó nhưng do bận làm bài tập nên chỉ có thể xem phim từ lúc 8 giờ 20 phút. Hỏi Lan xem bộ phim trong thời gian bao lâu ?",
        correctAnswer: "1:10",
        startTime: '7:00',
        endTime:''
      },
      {
        type: "rotate-end",
        request:
          "Bộ phim hoạt hình bắt đầu chiếu trên VTV2 lúc 7 giờ và phát sóng trong 40 phút. Hỏi bộ phim sẽ kết thúc vào lúc mấy giờ ?",
        correctAnswer: "7:40",
        startTime: '7:00',
        endTime:''
      },
      {
        type: "rotate-start",
        request:
          "Bộ phim kết thúc vào lúc 12 giờ 45 phút và đã phát sóng trong 2 giờ 30 phút. Hỏi bộ phim được phát sóng vào lúc mấy giờ ?",
        correctAnswer: "10:15",
        startTime: '',
        endTime:'12:45'
      },
      {
        type: "rotate-start",
        request:
          "Bộ phim kết thúc vào lúc 16 giờ 45 phút và đã phát sóng trong 2 giờ 30 phút. Hỏi bộ phim được phát sóng vào lúc mấy giờ ?",
        correctAnswer: "2:15",
        startTime: '',
        endTime:'16:45'
      },
    ],
  },
];
