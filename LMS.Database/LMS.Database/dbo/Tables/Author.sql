CREATE TABLE [dbo].[Author] (
    [AuthorId]     INT          IDENTITY (1, 1) NOT NULL,
    [FirstName]    VARCHAR (50) NOT NULL,
    [MiddleName]   VARCHAR (50) NULL,
    [LastName]     VARCHAR (50) NOT NULL,
    [CreatedBy]    VARCHAR (30) NOT NULL,
    [CreatedDate]  DATETIME     NOT NULL,
    [ModifiedBy]   VARCHAR (30) NULL,
    [ModifiedDate] DATETIME     NULL,
    [Active]       BIT          NOT NULL,
    [GenderId]     INT          NULL,
    CONSTRAINT [pk_author_authorId] PRIMARY KEY CLUSTERED ([AuthorId] ASC),
    CONSTRAINT [fk_author_gender_genderId] FOREIGN KEY ([GenderId]) REFERENCES [dbo].[Gender] ([GenderId])
);



