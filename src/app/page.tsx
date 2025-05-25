import ActiveLabel from './components/labels/active-label/active-label';
import NotActiveLabel from './components/labels/not-active-label/not-active-label';
import PendingLabel from './components/labels/pending-label/pending-label';
import SuspendedLabel from './components/labels/suspended-label/suspended-label';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not Active</NotActiveLabel>
        <PendingLabel>Pending</PendingLabel>
        <SuspendedLabel>Suspended</SuspendedLabel>
      </main>
    </div>
  );
}
