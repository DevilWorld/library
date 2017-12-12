CREATE TABLE [dbo].[Books] (
    [BookId]          INT           IDENTITY (1, 1) NOT NULL,
    [BookName]        VARCHAR (250) NOT NULL,
    [AuthorId]        INT           NOT NULL,
    [TotalCopies]     INT           NULL,
    [AvailableCopies] INT           NULL,
    [CreatedBy]       VARCHAR (30)  NOT NULL,
    [CreatedDate]     DATETIME      NOT NULL,
    [ModifiedBy]      VARCHAR (30)  NULL,
    [ModifiedDate]    DATETIME      NULL,
    [Active]          BIT           NOT NULL,
    CONSTRAINT [pk_books_bookName_authorId] PRIMARY KEY NONCLUSTERED ([BookName] ASC, [AuthorId] ASC)
);


GO
CREATE CLUSTERED INDEX [clix_books_bookName]
    ON [dbo].[Books]([BookName] ASC);

