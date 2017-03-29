var webdriver = require('selenium-webdriver'), 
By = webdriver.By, 
until = webdriver.until; 

var driver = new webdriver.chrome 
.forBrowser('chrome') 
.usingServer('http://localhost:4444/wd/hub') //注意這裡 
.build; driver.get('https://www.baidu.com'); 

driver.findElement(By.id('kw')).sendKeys('webdriver'); 
driver.findElement(By.id('su')).click; 
driver.wait(until.titleIs('webdriver_百度搜索'), 1000); 
driver.quit;

