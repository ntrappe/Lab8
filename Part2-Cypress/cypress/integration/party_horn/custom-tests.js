describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input change', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio element changes when slider change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Sound source changes when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Image source changes when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Volume image changes when slider at volume level 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Volume image changes when slider at volume level 1', () => {
    cy.get('#volume-slider').invoke('val', 10).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when slider at volume level 2', () => {
    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when slider at volume level 3', () => {
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button disabled when textbox input empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('EXTRA: Honk button NOT disabled when textbox input 2', () => {
    cy.get('#volume-number').clear().type('2');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.not.have.attr('disabled');
    });
  }); 

  it('Honk button disabled when textbox input non-number', () => {
    cy.get('#volume-number').clear().type('hi');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error shown when textbox has number out-of-range', () => {
    cy.get('#volume-number').clear().type('101');
    /* if invalid, the textbox is colored red */
    cy.get('#volume-number:invalid');
  });

  it('EXTRA: NO error shown when textbox has number in range', () => {
    cy.get('#volume-number').clear().type('10');
    /* if invalid, the textbox is colored red */
    cy.get('#volume-number:valid');
  });
});
