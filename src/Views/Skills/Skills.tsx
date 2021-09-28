import { Steps, Step } from 'react-step-builder';
import AttrPage from '../Skills/AttrPage';
import BodyPage from '../Skills/BodyPage';
import CoolPage from '../Skills/CoolPage';
import styles from './StyleSheets/Skills.module.css';

function SkillsPage() {
  return (
    <div className={styles.container}>
      <Steps>
        <Step component={AttrPage} />
        <Step component={BodyPage} />
        <Step component={CoolPage} />
      </Steps>
    </div>
  );
}

export default SkillsPage;
