### Default StatusCard

```js
<div className="ui cards">
  <StatusCard
    key={'status-123456789012345678'}
    avatarUrl={'https://via.placeholder.com/35x35'}
    name={'User\'s name here'}
    time={'Wed Feb 28 19:38:13 +0000 2018'}
    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit nulla et ex commodo, vel finibus lacus condimentum. Sed facilisis amet.'}
    newStatus={false}
  />
</div>
```

### StatusCard for new status updates

```js
<div className="ui cards">
  <StatusCard
    key={'status-123456789012345678'}
    avatarUrl={'https://via.placeholder.com/35x35'}
    name={'User\'s name here'}
    time={'Wed Feb 28 19:38:13 +0000 2018'}
    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit nulla et ex commodo, vel finibus lacus condimentum. Sed facilisis amet.'}
    newStatus={true}
  />
</div>
```
