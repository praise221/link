var webdriver = require('selenium-webdriver'), 
By = webdriver.By, 
until = webdriver.until; 

var driver = new webdriver.chrome 
.forBrowser('chrome') 
.usingServer('http://localhost:4444/wd/hub') //�`�N�o�� 
.build; driver.get('https://www.baidu.com'); 

driver.findElement(By.id('kw')).sendKeys('webdriver'); 
driver.findElement(By.id('su')).click; 
driver.wait(until.titleIs('webdriver_�ʫ׷j��'), 1000); 
driver.quit;

