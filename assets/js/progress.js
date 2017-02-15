
      var bar = new ProgressBar.Circle(progress1, {
      color: '#aaa',
      strokeWidth: 6,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });     

    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.8);  // Number from 0.0 to 1.0


      var bar2 = new ProgressBar.Circle(progress2, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });     

    bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar2.text.style.fontSize = '2rem';

    bar2.animate(0.8);  // Number from 0.0 to 1.0


      var bar3 = new ProgressBar.Circle(progress3, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });     

    bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar3.text.style.fontSize = '2rem';

    bar3.animate(0.7);  // Number from 0.0 to 1.0


      var bar4 = new ProgressBar.Circle(progress4, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });     

    bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar4.text.style.fontSize = '2rem';

    bar4.animate(0.8);  // Number from 0.0 to 1.0

var bar5 = new ProgressBar.Circle(progress5, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true,
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });   
    bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar5.text.style.fontSize = '2rem';

    bar5.animate(0.7);  // Number from 0.0 to 1.0

var bar6 = new ProgressBar.Circle(progress6, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: true
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 100) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });     

    bar6.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar6.text.style.fontSize = '2rem';

    bar6.animate(0.7);  // Number from 0.0 to 1.0

