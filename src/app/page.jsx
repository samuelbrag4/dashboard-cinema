import Header from "@/components/header"
import styles from "./page.module.css"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import DashboardContent from "@/components/dashboardContent"

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.dashboardContainer}>
      <Sidebar />

      <DashboardContent />
      </main>

      <Footer />
    </div>
  )
}
