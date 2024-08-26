import Joyride, { CallBackProps, Status, STATUS, Step } from 'react-joyride';
import { useLocalStorage } from 'react-use';

const steps: Step[] = [
  {
    title: `Hello and welcome to Articles Seeker!`,
    target: 'body',
    content: `Let's have a quick tour, shall we?`,
    placement: 'center',
  },
  {
    title: 'Topic Searchbar',
    target: '#topic-input',
    content: 'Here you can type any topic to find relevant articles',
    offset: 1,
  },
  {
    title: 'Articles List',
    target: '#articles-list',
    content: 'Here you will see found articles once you start typing',
    offset: 1,
  },
  {
    title: 'Change AI Model (PRO feature)',
    target: '#change-models-button',
    content: 'Here you can change the AI model used to search for articles',
    offset: 1,
  },
  {
    title: 'Subscription Plans',
    target: '#subscription-plan-switch',
    content:
      "Last, but not least: here you can switch between our Free and Paid plan (for demo purposes only). For example, you'll not be able to choose an AI model with the Free plan. Try it out! ",
    offset: 1,
  },
  {
    title: 'Happy searching!',
    target: 'body',
    content: 'Time to start searching, good luck!',
    placement: 'center',
  },
];

function JoyrideTour() {
  const [tourStatus, setTourStatus] = useLocalStorage<Status>(
    'tourStatus',
    STATUS.RUNNING,
  );

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
      setTourStatus(data.status);
    }
  };
  return (
    <Joyride
      callback={handleJoyrideCallback}
      steps={steps}
      continuous
      showProgress
      scrollToFirstStep
      showSkipButton
      disableOverlay
      run={tourStatus === STATUS.RUNNING}
    />
  );
}

export default JoyrideTour;
