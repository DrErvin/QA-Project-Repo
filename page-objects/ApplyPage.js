class ApplyPage {
  constructor(page) {
    this.page = page;
    this.applyNowButton = '#apply-top-btn';
    this.applicationForm = '.apply-form';
    this.submitButton = '.apply__btn';
    this.successMessage = '.message';
  }

  // Navigate directly to the opportunity details page
  async navigateToOpportunity(opportunityId) {
    await this.page.goto(`/#${opportunityId}`);
    await this.page.waitForSelector(this.applyNowButton, { state: 'visible' });
  }

  // Click the Apply Now button
  async clickApplyNowButton() {
    await this.page.click(this.applyNowButton);
  }

  // Verify if the application form is visible
  async isApplicationFormVisible() {
    // Wait for the application form to be fully visible (after the animation ends)
    await this.page.waitForSelector(this.applicationForm, { state: 'visible' });
    return await this.page.isVisible(this.applicationForm);
  }

  async submitApplicationForm() {
    await this.page.click(this.submitButton);
  }

  async getSuccessMessage() {
    return await this.page.textContent(this.successMessage);
  }
}

module.exports = ApplyPage;
