import Header from "../components/Header";
import TabBar from "../components/TabBar";

import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TabBar />

      {/* </TabBar> */}
    </div>
  );
}

export default Main;
