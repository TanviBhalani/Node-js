import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useEffect } from "react"
import { FaClock, FaUsers, FaUser, FaImage } from "react-icons/fa"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const barData = [
  { name: "Apples", Jane: 4, John: 6, Joe: 5 },
  { name: "Oranges", Jane: 3, John: 5, Joe: 4 },
  { name: "Bananas", Jane: 6, John: 8, Joe: 7 },
  { name: "Plums", Jane: 5, John: 6, Joe: 4 },
]

const pieData = [
  { name: "Chrome", value: 45 },
  { name: "Firefox", value: 25 },
  { name: "Safari", value: 15 },
  { name: "Others", value: 15 },
]

// BAR + LINE CHART
const barOptions = {
  title: { text: "" },
  xAxis: {
    categories: ["Apples", "Oranges", "Pears", "Bananas", "Plums"]
  },
  yAxis: { title: { text: "Values" } },
  series: [
    { type: "column", name: "Jane", data: [3, 2, 1, 3, 4], color: "#f97316" },
    { type: "column", name: "John", data: [4, 3, 5, 7, 6], color: "#14b8a6" },
    { type: "column", name: "Joe", data: [3, 4, 2, 9, 5], color: "#334155" },
    { type: "spline", name: "Average", data: [3.3, 3, 2.6, 6.3, 5], color: "#0ea5e9" }
  ]
}

// PIE CHART
const pieOptions = {
  title: { text: "" },
  series: [
    {
      type: "pie",
      data: [
        { name: "Jane", y: 30, color: "#f97316" },
        { name: "John", y: 40, color: "#14b8a6" },
        { name: "Joe", y: 30, color: "#334155" }
      ],
      size: 120
    }
  ]
}

const topCards = [
  {
    title: "Products",
    value: "4500",
    badge: "Sales",
    badgeColor: "bg-orange-500",
    text: "Arriving Today",
    icon: "📡",
    iconColor: "text-orange-500",
  },
  {
    title: "Products",
    value: "37,500",
    badge: "Views",
    badgeColor: "bg-blue-500",
    text: "View Today",
    icon: "🎁",
    iconColor: "text-blue-500",
  },
  {
    title: "Products",
    value: "$30,780",
    badge: "Sales",
    badgeColor: "bg-green-500",
    text: "Reviews",
    icon: "🛒",
    iconColor: "text-green-500",
  },
  {
    title: "Products",
    value: "$30,780",
    badge: "Sales",
    badgeColor: "bg-red-500",
    text: "Reviews",
    icon: "🚀",
    iconColor: "text-red-500",
  },
]

const pieOptions2 = {
  chart: { type: "pie" },
  title: { text: "" },
  plotOptions: {
    pie: {
      innerSize: "0%",
      depth: 15,
      dataLabels: { enabled: true }
    }
  },
  series: [
    {
      data: [
        { name: "Firefox", y: 40, color: "#14b8a6" },
        { name: "IE", y: 30, color: "#1f2937" },
        { name: "Chrome", y: 15, color: "#3b82f6" },
        { name: "Safari", y: 10, color: "#f97316" },
        { name: "Others", y: 5, color: "#a855f7" },
      ],
    },
  ],
}






export default function Dashboard() {

  const navigate = useNavigate()



useEffect(() => {
  const checkAuth = async () => {
    const res = await axios.get("http://localhost:2009/dashboard", {
      withCredentials: true,
      validateStatus: () => true 
    })

    if (res.status === 401 || !res.data.auth) {
      navigate("/login")
    }
  }

  checkAuth()
}, [])




  const projects = [
    {
      name: "Appestia Project",
      created: "Created 14.9.2016",
      percent: "50%",
      date: "October 21, 2015",
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Contract with Belife Company",
      created: "Created 20.10.2016",
      percent: "70%",
      date: "November 21, 2015",
      img: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Web Consultancy project",
      created: "Created 20.10.2016",
      percent: "40%",
      date: "September 21, 2015",
      img: "https://i.pravatar.cc/100?img=3"
    },
    {
      name: "Appestia Project",
      created: "Created 14.9.2016",
      percent: "50%",
      date: "October 21, 2015",
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Web Consultancy project",
      created: "Created 20.10.2016",
      percent: "40%",
      date: "September 21, 2015",
      img: "https://i.pravatar.cc/100?img=3"
    },
  ]
  return (
    <div className="bg-gray-100 min-h-screen p-6 ml-64 mt-16">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {topCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-start"
          >
            <div>
              <p className="text-gray-500">{card.title}</p>
              <h2 className="text-3xl font-bold text-gray-700 mb-3">{card.value}</h2>

              <span className={`${card.badgeColor} text-white text-xs px-2 py-1 rounded`}>
                {card.badge}
              </span>
              <span className="text-gray-500 text-sm ml-2">{card.text}</span>
            </div>

            <div className={`${card.iconColor} text-3xl`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>



      {/* MAIN GRID */}
      <div className="bg-gray-100 min-h-auto p-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ================= PROFILE CARD ================= */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            {/* HEADER */}
            <div className="relative h-48 profile-bg flex justify-center items-center">
              <img
                src="/images/bg.jpg"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg z-10"
              />
            </div>

            {/* NAME */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Josephin Villa</h2>
              <p className="text-gray-500">Software Engineer</p>
            </div>

            {/* STATS LIST */}
            <div className="px-6 mt-4 space-y-4 text-sm">

              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-600" />
                  <span>Recent Activities</span>
                </div>
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">480</span>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-gray-600" />
                  <span>Current Employees</span>
                </div>
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">390</span>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-600" />
                  <span>Following</span>
                </div>
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">485</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaImage className="text-gray-600" />
                  <span>Pictures</span>
                </div>
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">506</span>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 py-5">
              <button className="bg-orange-500 text-white px-5 py-2 rounded shadow font-bold hover:bg-orange-600">
                FOLLOWS
              </button>
              <button className="bg-blue-500 text-white px-5 py-2 rounded shadow font-bold hover:bg-blue-600">
                MESSAGE
              </button>
            </div>

          </div>

          {/* ================= CHART CARD ================= */}
          <div className="bg-white p-4 rounded-xl shadow col-span-2 relative">

            <h2 className="text-gray-500 font-bold text-sm">BAR CHART</h2>
            <h3 className="text-center font-bold text-lg mb-2">Combination chart</h3>

            {/* Small Pie Chart */}
            <div className="absolute left-4 top-20 bg-white rounded-full shadow">
              <HighchartsReact highcharts={Highcharts} options={pieOptions} />
            </div>

            {/* Bar Chart */}
            <HighchartsReact highcharts={Highcharts} options={barOptions} />

          </div>

        </div>

      </div>




      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {/* ================= PROJECT TABLE ================= */}
        <div className="bg-white p-5 rounded-xl shadow col-span-2">

          <table className="w-full text-sm">
            <thead className="border-b ">
              <tr className="text-left text-gray-600">
                <th>PHOTO</th>
                <th>PROJECT</th>
                <th>COMPLETED</th>
                <th>STATUS</th>
                <th>DATE</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((p, i) => (
                <tr key={i} className="border-b">

                  {/* PHOTO */}
                  <td className="py-4">
                    <img src={p.img} className="w-12 h-12 rounded-full" />
                  </td>

                  {/* PROJECT NAME */}
                  <td>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <FaClock /> {p.created}
                    </p>
                  </td>

                  {/* CIRCLE PROGRESS */}
                  <td>
                    <div className="w-10 h-10 rounded-full border-4 border-gray-300 border-t-blue-500"></div>
                  </td>

                  {/* STATUS */}
                  <td className="font-bold">{p.percent}</td>

                  {/* DATE */}
                  <td className="text-gray-500">{p.date}</td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* ================= PIE CHART CARD ================= */}
        <div className="bg-white p-5 rounded-xl shadow flex flex-col justify-between">

          <h2 className="font-bold text-gray-500">BAR CHART</h2>
          <p className="font-bold text-sm">Browser market shares at a specific website, 2014</p>

          <HighchartsReact highcharts={Highcharts} options={pieOptions2} />

          <button className="bg-blue-500 text-white px-5 py-2 rounded shadow self-center mt-3">
            UPGRADE TO PRO
          </button>

        </div>

      </div>

    </div>
  )
}
