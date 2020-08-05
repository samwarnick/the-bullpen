import { h, render } from 'preact';
import { ReviewChooser } from './components/ReviewChooser';

const reviewChooserTarget = document.getElementById('review-chooser');
if (!reviewChooserTarget) {
  console.error('Could not find #review-chooser');
} else {
  render(<ReviewChooser />, reviewChooserTarget);
}
