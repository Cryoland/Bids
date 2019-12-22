-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Дек 22 2019 г., 17:21
-- Версия сервера: 5.6.37
-- Версия PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bids`
--

CREATE TABLE IF NOT EXISTS `bids` (
  `id` int(11) NOT NULL,
  `lname` varchar(127) DEFAULT NULL,
  `fname` varchar(127) DEFAULT NULL,
  `sname` varchar(127) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(127) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `comment` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `bids`
--

INSERT INTO `bids` (`id`, `lname`, `fname`, `sname`, `phone`, `email`, `address`, `datetime`, `comment`) VALUES
(1, 'Фамилия', '22244', 'sdfgfgdf', '4444', '5555354', '66666', '2019-12-21 16:47:49', 'comment54643'),
(2, '111', '222', '333', '', '5555', '66666', '2019-12-21 16:49:37', 'comment'),
(3, 'adasd', 'asdasdada', '34234', '+79202223344', 'test@domain.com', 'addddresssss', '2019-12-21 16:57:13', '666666666'' OR ''''='''),
(4, 'укйцук', 'цукцукцук', 'цукцукцук', '+79001234567', 'noreply@mail.io', 'some address', '2019-12-21 17:12:46', 'some text'),
(5, 'укеуцкеуке', 'ваыв', 'й324цйфвф', '', '1@2.asf', 'asdfadasda', '2019-12-21 17:38:59', 'sdfsdfsdfsdf'),
(6, 'Орлов', 'Вячеслав', 'Александрович', '89001002233', 'asdkh@lalasd.net', 'addddrreesss 1212', '2019-12-21 17:02:38', 'texttexttexttext');

-- --------------------------------------------------------

--
-- Структура таблицы `managers`
--

CREATE TABLE IF NOT EXISTS `managers` (
  `id` int(11) NOT NULL,
  `login` varchar(127) NOT NULL,
  `passhash` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `managers`
--

INSERT INTO `managers` (`id`, `login`, `passhash`) VALUES
(1, 'manager', '1a8565a9dc72048ba03b4156be3e569f22771f23');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `managers`
--
ALTER TABLE `managers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
